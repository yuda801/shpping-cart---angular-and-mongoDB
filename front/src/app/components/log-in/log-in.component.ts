import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UsersI } from 'src/app/interfaces/usersInterface';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public users:Object[] = []

  constructor(private _userService: UsersService) { }
  ngOnInit(): void {
    this._userService.getUsers()
      // .subscribe(data => this.users = data)
      .subscribe(data => {
        this.users = data
        console.log("data in log-in component:")
        console.log(data);
      })
  }

}
