import { DataSource } from 'typeorm';
import { Post } from './entity/Post';
import { Comment } from './entity/Comment';

export const AppDataSource = new DataSource({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'mongodb',
    entities: [Post, Comment],
    subscribers: [],
    migrations: [],
});