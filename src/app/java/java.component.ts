import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {




  constructor(private route : Router ) {
        
  }
  load()
  {
   this.route.navigate(['java'])
   
  }








 

  }




