import { Component } from '@angular/core';
 import { Route, Router } from '@angular/router';
        

 @Component({
 selector: 'app-courses-data',
   templateUrl: './courses-data.component.html',
   styleUrls: ['./courses-data.component.css']
})
export class CoursesDataComponent {

  constructor(private route:Router) {}

 
  load()
  {
    console.log("hello")
  this.route.navigate(['courses/java'])
  
  }

  load1()
  {
    this.route.navigate(['courses/python'])
  }

  load2()
  {
    this.route.navigate(['courses/javascript'])
  }

  load4()
  {
    this.route.navigate(['courses/angular'])
  }

  load3()
  {
    this.route.navigate(['courses/mysql'])
  }

  load5()
  {
    this.route.navigate(['courses/javascript'])
  }
 }