import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  user: User = new User();
  allUsers: User[] = [];
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.allUsers = users;   
    } );   
  }
}

