import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { Comment } from './Comment';

@Entity()
export class Post {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    //eslint-disable-next-line
    @Column((type) => Comment)
    comments: Comment[];
}