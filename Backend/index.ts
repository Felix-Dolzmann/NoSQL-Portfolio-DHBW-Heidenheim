import 'reflect-metadata';
import { AppDataSource } from './src/data-source';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Post } from './src/entity/Post';
import { Comment } from './src/entity/Comment';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore 
import { ObjectId } from 'mongodb';

const app = express();

//app.set('view engine', 'ejs');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(cors({
	origin: 'http://localhost:4200',
	optionsSuccessStatus: 200,
    credentials: true
}));


app.use(express.static(__dirname + '/public'));

app.get('/', function(req: any, res: any){
    res.send('Hello World');
});

app.post('/test', function (req:any, res: any) {
    console.log(req.body);
    AppDataSource.getMongoRepository(Post).insertOne({'firstName': 'test', 'lastName': 'test'});
    res.status(201).end(JSON.stringify({status: 'success'}));
});

app.get('/posts', function (req:any, res: any) {
    console.log(req.body, 'body');
    AppDataSource.getMongoRepository(Post).find().then((result) => {
        console.log(result);
        res.status(201).end(JSON.stringify(result));
    });
});

app.get('/posts/:id', function (req:any, res: any) {
    console.log(req.params.id);
    AppDataSource.getMongoRepository(Post).findOne({_id: new ObjectId(req.params.id)} as any).then((result) => {
        console.log(result);
        res.status(201).end(JSON.stringify(result));
    });
});


app.post('/newPost', function (req:any, res: any) {
    console.log(req.body);
    AppDataSource.getMongoRepository(Post).insertOne({'title': req.body.title, 'upvotes': 1 ,'content': req.body.content, 'comments': []});
    res.status(201).end(JSON.stringify({status: 'success'}));
});

app.post('/newComment/:postId', async function (req:any, res: any) {
    console.log(req.body);
    const selectedPost = await AppDataSource.getMongoRepository(Post).findOne({_id: new ObjectId(req.params.postId)} as any);
    console.log(selectedPost);
    if(selectedPost) {
        const result = await AppDataSource.getMongoRepository(Post).findOneAndUpdate({_id: new ObjectId(req.params.postId)}, {$push: {'comments': {author: req.body.author, content: req.body.content}}});
        console.log(result);
        if(result) {
            res.status(201).end(JSON.stringify({status: 'success', message: result}));
        } else {
            res.status(400).end(JSON.stringify({status: 'error', message: 'Error while adding comment'}));
        }
    }
});

app.post('/commentComment/:postId', async function (req:any, res: any) {
    console.log(req.body);
    let depthString = '';
    for(let i = 0; i < req.body.commentDepth; i++) {
        depthString += '.comments';
    }
    const selectString = `comments${depthString}.id`;
    const updateString = `comments${depthString}.comments`;	
    const selectedPost = await AppDataSource.getMongoRepository(Post).findOne({_id: new ObjectId(req.params.postId)} as any);
    //console.log(selectedPost);
    if(selectedPost && req.body.commentId) {
        //const result = ''; //await AppDataSource.getMongoRepository(Post).findOneAndUpdate({_id: new ObjectId(req.params.postId)}, {$push: {'comments': {author: req.body.author, content: req.body.content, comments: []}}});
        //console.log(result);
        const test = await AppDataSource.getMongoRepository(Post).findOne({where: {selectString: { $eq: new ObjectId(req.body.commentId)}} as any});
        console.log(selectString, updateString, test);
        const result2 = await AppDataSource.getMongoRepository(Post).findOneAndUpdate({where: {selectString: { $eq: new ObjectId(req.body.commentId)}}}, {$push: {updateString: {_id: new ObjectId(), author: req.body.author, content: req.body.content}}});
        if(result2) {
            res.status(201).end(JSON.stringify({status: 'success', message: result2}));
        } else {
            res.status(400).end(JSON.stringify({status: 'error', message: 'Error while adding comment'}));
        }
    }
});


AppDataSource.initialize()
	.then(() => {console.log('AppDataSource is initialized!');})
	.catch((error) => console.log(error));

app.listen(3000, function(){
	console.log('App is running on Port 3000');
});
