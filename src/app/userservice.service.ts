import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  [x: string]: any;
  users= [
    {
      "id": 0,
      "name": "Adam Carter",
      "work": "Unilogic",
"image":"assets/p1.png",
      "email": "adam.carter@unilogic.com",
      "dob": "1978",
      "address": "83 Warner Street",
      "city": "Boston",
      "optedin": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
"image":"assets/p2.png",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
 {
      "id": 2,
      "name": "Chaitanya",
      "work": "Designer",
"image":"assets/p3.png",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Pune",
      "optedin": false
    }
  ]
  constructor() { }
}
