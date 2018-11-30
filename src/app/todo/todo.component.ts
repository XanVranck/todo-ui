import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../model/todo';
import * as firebase from 'firebase'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  todosForAnOwner: Todo [] = [];
  owner:string = "";

  voegTodoToe(todo: string) {
    this.todoService.voegTodoToe(new Todo(null, this.owner, todo, false));
    this.haalTodosOp()
    return false;
  }

  constructor(private todoService: TodoService) { 
  }

  ngOnInit() {
    this.haalTodosOp();
  }
  
  haalTodosOp(){
    this.todos = this.todoService.haalTodosOp();
    this.filterTodosPerOwner()
  }

  updateDone(todo:Todo){
    this.todoService.updateDone(todo);
    this.haalTodosOp()
    return true;
  }
  
  verwijderTodo(todo:Todo){
    this.todoService.verwijderTodo(todo)
    this.haalTodosOp();
  }

  changeOwner(owner:string){
    this.owner = owner;
    this.filterTodosPerOwner();
  }

  filterTodosPerOwner(){
    this.todosForAnOwner = this.todos.filter(todo => todo.owner === this.owner);
  }

  showTodoForm():boolean{
    return this.owner !== '';
  }
}
