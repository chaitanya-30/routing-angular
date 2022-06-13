import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users=[{},{},{}]
user
// user={   id:"number",
//   name:" string",
//   work: "string",
//   image: "string",
//   email: "string",
//   dob:" string",
//   address: "string",
//   city: "string",
//   optedin:" boolean",
// }
  constructor(private us :UserserviceService,private router:ActivatedRoute) { 
this.users=us.users
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      params =>{
        let userid=+params.get('id');
        // this.user=this.us.users[userid]
        this.user=this.us.users.find(u => u.id==userid);
        console.log(this.user.image)
      }
    )


  
  }

}

