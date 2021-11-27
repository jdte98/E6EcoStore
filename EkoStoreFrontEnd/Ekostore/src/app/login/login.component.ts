import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Login';

  user_correct: string = "admininicial";
  pass_correct: string = "admin123456";

  user: string = "";
  pass: string = "";

  correct: number = -1;
  comparar(){
    if (this.user === this.user_correct){
      this.correct = 1;
      if (this.pass === this.pass_correct){
        this.correct = 1;
      } else {
        this.correct = 0;
      }
    } else {
      this.correct = 0;
    }
  }

}
