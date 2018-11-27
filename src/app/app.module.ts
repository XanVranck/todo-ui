import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { FirebaseModule, FirebaseProvider}  from 'angular-firebase'
import * as firebase from 'firebase';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';


var config = {
  apiKey: "AIzaSyC6eUiaN8DneC5Y56NaAQz8cAWKFnfyLNI",
  authDomain: "todo-cc7a5.firebaseapp.com",
  databaseURL: "https://todo-cc7a5.firebaseio.com",
  projectId: "todo-cc7a5",
  storageBucket: "todo-cc7a5.appspot.com",
  messagingSenderId: "558568956349"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FirebaseModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule
  ],
  providers: [
    FirebaseProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
