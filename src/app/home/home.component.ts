import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string = 'abcsdfksd';
  imgUrl:string = 'https://www.tutorialspoint.com/static/images/logo-color.png';
  myParaColor:string = 'red';
  constructor() { }

  ngOnInit(): void {
  }

  submitFunc(){
    console.log('testttt');
    this.myParaColor = 'blue'
  }

}
