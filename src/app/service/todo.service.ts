import { Injectable } from '@angular/core';
import { FirebaseProvider } from 'angular-firebase';
import * as firebase from 'firebase'
import { Todo } from '../model/todo'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  database = firebase.database();
  todos: Todo[] = [];

  constructor() { }

  voegTodoToe(todoGui: Todo) {
    this.database.ref('/todo').push({
      todo: todoGui.todo,
      done: todoGui.done
    });
  }

  haalTodosOp(): Todo[] {
    this.todos = []
    this.database.ref('/').once('child_added', (data) => {
      data.forEach(element => {
        this.todos.push(new Todo(element.key.valueOf(), element.child('todo').val(), element.child('done').val()))
      })
    }).then();

    return this.todos;
  }

  updateDone(todo: Todo) {
    this.database.ref('/todo/' + todo.id).set({ todo: todo.todo, done: !todo.done })
      .then();
  }

  verwijderTodo(todo:Todo) {
    this.database.ref('/todo/' + todo.id).remove().then();
  }
}
