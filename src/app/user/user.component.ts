import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  address:{
  street:string,
  state:string
  };

  hobbies:string[];

  constructor() {
   
   }

  ngOnInit() {

   this.name="john";
   this.age="32";
   this.address={
   street:'adf 12',
   state:'west'
   }
   this.hobbies=['abs','def','ght','lmn'];
  }

}
