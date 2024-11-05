import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-angular-js',
  templateUrl: './angular-js.component.html',
  styleUrls: ['./angular-js.component.css']
})
export class AngularJsComponent {


  constructor(private route : Router){}


  load4()
  {
    this.route.navigate(['angular'])
  }

}
