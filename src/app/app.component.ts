import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  firstName:string = 'Ghayal';
  studenNumbar:number = 333;
  empArr:any =['test11', 'test222'];
  isButton:boolean = false;
  obj:any = {};
}
