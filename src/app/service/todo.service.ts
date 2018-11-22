import { Injectable } from '@angular/core';
import { FirebaseProvider } from 'angular-firebase';
import * as firebase from 'firebase'
import { Todo } from '../model/todo'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  database = firebase.database();
  todos:Todo[];

  constructor() { }

  voegTodoToe(todoGui: Todo) {
    this.database.ref('/todo').push({
      todo: todoGui.todo,
      done: todoGui.done
    });
  }

  haalTodosOp() {
    return this.database.ref('/todo').once('value');
  }
}
