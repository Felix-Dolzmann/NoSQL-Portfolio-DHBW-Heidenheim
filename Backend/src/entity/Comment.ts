import { ObjectIdColumn, Column, Entity, PrimaryColumn} from 'typeorm';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ObjectId } from 'mongodb';
import { randomUUID } from 'crypto';

@Entity()
export class Comment {
    @ObjectIdColumn()
    id: string;

    @Column()
    author: string;

    @Column()
    content: string;

    @Column()
    comments: CommentL2[];

    constructor(author: string, content: string) {
        //this.id = randomUUID();
        this.author = author;
        this.content = content;
    }
}

export class CommentL2 {
    @ObjectIdColumn()
    id: string;

    @Column()
    author: string;

    @Column()
    content: string;

    @Column()
    comments: CommentL3[];

    constructor(author: string, content: string) {
        //this.id = randomUUID();
        this.author = author;
        this.content = content;
    }
}

export class CommentL3 {
    @ObjectIdColumn()
    id: string;

    @Column()
    author: string;

    @Column()
    content: string;

    @Column()
    comments: CommentL4[];

    constructor(author: string, content: string) {
        //this.id = randomUUID();
        this.author = author;
        this.content = content;
    }
}

export class CommentL4 {
    @ObjectIdColumn()
    id: string;

    @Column()
    author: string;

    @Column()
    content: string;

    constructor(author: string, content: string) {
        this.author = author;
        this.content = content;
    }
}