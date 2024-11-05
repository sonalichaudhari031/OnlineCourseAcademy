import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent {

  constructor(private route : Router ) {}
  
  load1()
  {
   this.route.navigate(['python'])
   
  }
  

}
