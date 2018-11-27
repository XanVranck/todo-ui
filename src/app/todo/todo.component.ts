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

  voegTodoToe(todo: string) {
    this.todoService.voegTodoToe(new Todo(null, todo, false));
  }

  constructor(private todoService: TodoService) { 
  }

  ngOnInit() {
    this.todos = this.todoService.haalTodosOp();
  }
  
  updateDone(todo:Todo){
    this.todoService.updateDone(todo);
    this.todos = this.todoService.haalTodosOp()
  }
  
  verwijderTodo(todo:Todo){
    this.todoService.verwijderTodo(todo)
    this.todos = this.todoService.haalTodosOp()
  }
}
