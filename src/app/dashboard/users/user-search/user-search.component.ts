import { User } from './../../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  userName = '';
  inputFocus = false;
  users: User[] = [
    {name: 'Ana Johns', email: 'ajohns@gmail.com', id: 1},
    {name: 'John Doe', email: 'john_doe@gmail.com', id: 2},
    {name: 'John Carlos', email: 'juan.carlos@gmail.com', id: 3},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  search(){

  }

  userDetails(user) {

  }

  onFocus(){} 

  onBlur(){
    console.log(this.userName);
    
    if (!this.userName) {
      this.inputFocus = false;
    }
  }

  clearInput(){
    this.userName = '';
    this.users = [];
    this.onBlur();
  }
}
