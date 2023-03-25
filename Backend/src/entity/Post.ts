import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { Comment } from './Comment';

@Entity()
export class Post {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column({default: 1})
    upvotes = 1;

    @Column()
    description: string;

    //eslint-disable-next-line
    @Column((type) => Comment)
    comments: Comment[];
}