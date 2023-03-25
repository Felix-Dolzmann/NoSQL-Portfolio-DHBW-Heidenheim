import 'reflect-metadata';
import { AppDataSource } from './src/data-source';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Post } from './src/entity/Post';
import { ObjectId } from 'mongodb';

const app = express();

//app.set('view engine', 'ejs');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
	extended: true
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
        res.status(201).end(JSON.stringify(result));
    });
});

app.post('/newPost', function (req:any, res: any) {
    console.log(req.body);
    AppDataSource.getMongoRepository(Post).insertOne({'title': req.body.title, 'upvotes': 1 ,'content': req.body.content, 'comments': []});
    res.status(201).end(JSON.stringify({status: 'success'}));
});

app.post('/newComment', function (req:any, res: any) {
    console.log(req.body);
    AppDataSource.getMongoRepository(Post).findOne({_id: new ObjectId(req.body.postId)} as any).then((result) => {
        console.log(result);
    //AppDataSource.getMongoRepository(Post).findOneAndUpdate({'_id': req.body.postId}, {$push: {'comments': req.body.comment}});
    res.status(201).end(JSON.stringify({status: 'success', message: result}));
    });
});

app.listen(3000, function(){
	console.log('App is running on Port 3000');
    AppDataSource.initialize()
	.then(() => {console.log('AppDataSource is initialized!');})
	.catch((error) => console.log(error));
});
