
# Angular Firebase Chat

Angular Char project using Firebase and Bootstrap.

* [Install](#install)
* [Usage](#usage)
 
## Install
##### clone and install npm dependencies:

    npm install

##### Run the project with:
```
ng serve 
```

## Usage
#### Firebase

In this project we used the [AngularFire module](https://github.com/angular/angularfire2), more precisely the AngularFireAuth for Authentication using Google login, and AngularFireDatabase for realtime database.

#### Angular 

In the Angular implementation part, a big part of the logic is implemented in the imput of the message :
```html
<input type="text" #inputMessage (keydown.enter)="sendMessage(inputMessage.value);inputMessage.value=''"
class="form-control form-control-lg chat-input" [disabled]="!(apiService.afAuth.user | async)"
[placeholder]="(apiService.afAuth.user | async) ? 'Enter your message ...': 'Please login using Google'">
```

this input will be disabled if the user is not logged in, and also when he press enter he sends a message.

## Contribution

You can fork project from github. Pull requests are kindly accepted.
1. npm install
3. Run demo: ng serve / npm start
