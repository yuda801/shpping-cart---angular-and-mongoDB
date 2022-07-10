import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { StatesService } from 'src/app/services/states.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public users: any = []

  constructor(private _userService: UsersService,
    private _router: Router,
    private _states:StatesService) { }

  ngOnInit() {
    console.log("enteres register first");

    this._userService.getUsers()
      // .subscribe(data => this.users = data)
      .subscribe(data => {
        this.users = data
        // console.log("data in reg one component:")
        // console.log(data);
      })
  }

  handleRegClick(regForm: any): any {
    let roleInput = regForm.role
    let idInput = regForm.id
    let emailInput = regForm.email
    let passwordInput = regForm.password

    if (!roleInput){alert("please choose your role");return;}
    if (!idInput){alert("please enter your ID");return;}
    if (!emailInput){alert("please enter your email");return;}
    if (!passwordInput){alert("please enter your password");return;}

    //check if user ID alerady in system
    let IsIdInSystem = false
    for (let user of this.users) {
      // console.log(user)
      if (user.userID === idInput) {
        IsIdInSystem = true;
        break;
      }
    }
    console.log(IsIdInSystem)
    if(IsIdInSystem){
      alert("ID already in system, go to log in!")
    }else{
      console.log("good!, id is not yet in system")
      let user = new User()
      user.roll = roleInput;
      user.userID = idInput
      user.userName = emailInput
      user.password = passwordInput
      // user.buyerCity = ''
      // user.buyerStreet = ''
      this._states.setUserInfo(user)
      this._states.setStateRegOneTrue()
      console.log("just set steate of part one to true")
      console.log("going to second part")
      this._router.navigate(['/registersecond']);
    }
  }

}
