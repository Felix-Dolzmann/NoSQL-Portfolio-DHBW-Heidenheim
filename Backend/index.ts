import 'reflect-metadata';
import { AppDataSource } from './src/data-source';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
//import mongoose from 'mongoose';
import { Post } from './src/entity/Post';

//mongoose.set('strictQuery', false);
//const mongoDB = 'mongodb://localhost:27017/Contacts';
//const Schema = mongoose.Schema;


/*const contactSchema = new Schema({
    //_id: mongoose.Schema.ObjectId,
    email: String,
    query: String,
});*/

//const Contact = mongoose.model('Contact', contactSchema);

const app = express();

//app.set('view engine', 'ejs');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/public'));

/*app.get('/contact', function(req: any, res: any){
	//res.render('contact');
   Contact.find({}).toArray(function(err: any, documents:any) {
        if (err) throw err;
    
        res.send(documents);
    });});*/

/*app.post('/contact', function (req:any, res: any) {
    console.log(req.body);
	console.log(req.body.email);
const contact = new Contact({
    _id: new mongoose.Types.ObjectId(),
	email: req.body.email,
	query: req.body.query,
});
contact.save(function (err: any) {
	if (err) {
		console.log('error', err);
        throw err;
	} else {
		//res.render('contact');
        console.log('no error');
        res.status(201).end(JSON.stringify({status: 'success'}));
	}
});
});*/

app.get('/', function(req: any, res: any){
    res.send('Hello World');
});

app.post('/test', function (req:any, res: any) {
    console.log(req.body);
    AppDataSource.getMongoRepository(Post).insertOne({'firstName': 'test', 'lastName': 'test'});
    res.status(201).end(JSON.stringify({status: 'success'}));
});

app.get('/test', function (req:any, res: any) {
    AppDataSource.getMongoRepository(Post).find().then((result) => {
        res.status(201).end(JSON.stringify(result));
    });
});

app.post('/newPost', function (req:any, res: any) {
    console.log(req.body);
    AppDataSource.getMongoRepository(Post).insertOne(req.body);
    res.status(201).end(JSON.stringify({status: 'success'}));
});

app.post('/newComment', function (req:any, res: any) {
    console.log(req.body);
    AppDataSource.getMongoRepository(Post).findOneAndUpdate({'_id': req.body.postId}, {$push: {'comments': req.body.comment}});
    res.status(201).end(JSON.stringify({status: 'success'}));
});

app.listen(3000, function(){
    /*mongoose.connect(mongoDB, function(err: any){
        if(err){
            console.log('Error connecting to database');
        }else{
            console.log('Connected to database');
        }
    });*/
	console.log('App is running on Port 3000');
});

AppDataSource.initialize()
	.then(() => {console.log('AppDataSource is initialized!');})
	.catch((error) => console.log(error));
