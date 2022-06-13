import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-usersintro',
  templateUrl: './usersintro.component.html',
  styleUrls: ['./usersintro.component.css']
})
export class UsersintroComponent implements OnInit {
users=[]
  constructor(private us:UserserviceService) { 
    this.users=us.users;
    
  }

  ngOnInit(): void {

    // console.log(this.users)
  }

}
