import { Injectable } from '@angular/core';   
import {FirebaseProvider} from 'angular-firebase';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private fb: FirebaseProvider) { }

}
