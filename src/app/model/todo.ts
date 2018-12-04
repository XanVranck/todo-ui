export class Todo {
    id:string;
    owner:string
    todo:string;
    done:boolean;

    constructor(id:string, owner:string, todo: string, done:boolean,){
        this.id = id;
        this.owner = owner;
        this.todo = todo;
        this.done = done;
    }
}