import { ObjectIdColumn, Column } from 'typeorm';

export class Comment {
    @ObjectIdColumn()
    id: string;

    @Column()
    comenter: string;

    @Column()
    comentText: number;

    constructor(id: string, comenter: string, comentText: number) {
        this.id = id;
        this.comenter = comenter;
        this.comentText = comentText;
    }
}