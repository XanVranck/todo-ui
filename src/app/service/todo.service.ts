import { Injectable } from '@angular/core';   
import {FirebaseProvider} from 'angular-firebase';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private fb: FirebaseProvider) { }

  voegTodoToe(todo: string) {
    this.fb.pushData('todo', todo)
  }

  haalTodosOp(){
    this.fb.getData('todo')
  }
}
