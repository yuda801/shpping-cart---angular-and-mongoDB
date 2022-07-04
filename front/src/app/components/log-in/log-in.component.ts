import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UsersI } from 'src/app/interfaces/usersInterface';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public users: any = []
  userNameInput = ''
  passwordInput = ''

  constructor(private _userService: UsersService,
    private _router:Router
    ) { }

  ngOnInit(): void {
    this._userService.getUsers()
      // .subscribe(data => this.users = data)
      .subscribe(data => {
        this.users = data
        console.log("data in log-in component:")
        console.log(data);
      })
  }

  handleLogInClick(logInForm: any): any {
    this.userNameInput = logInForm.userName
    this.passwordInput = logInForm.password

    console.log(this.userNameInput)
    console.log(this.passwordInput)
    let IsUserNameRight = false;
    let IsPasswordRight = false;
    for (let user of this.users) {
      if (user.userName === this.userNameInput) {
        IsUserNameRight = true;
        console.log("user name is right")
        if (user.password == this.passwordInput) {
          IsPasswordRight = true
          console.log("password is right")
          localStorage.setItem("isLogedIn", "true")
          this._router.navigate(['/home']);
          break;
        }
        else{
          console.log("password is wrong")
        }
      }
    }
    if(!IsUserNameRight || !IsPasswordRight){
    alert(`Please enter correct user name and password,
    Not registered yet? click on Sign Up button`);
    }
  }

}
