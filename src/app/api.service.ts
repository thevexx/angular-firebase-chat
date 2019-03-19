import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  sendMessage(message) {
    this.afAuth.user.subscribe(user => {
      const messageRef = this.db.list('messages');
      messageRef.push({ message, date: Date.now(), user: user.displayName });
    });
  }

  getMessages() {
    return this.db.list('messages').valueChanges();
  }
}
