import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-sql',
  templateUrl: './my-sql.component.html',
  styleUrls: ['./my-sql.component.css']
})
export class MySqlComponent {

  constructor(private route :Router) {}


  load3()
  {
      this.route.navigate(['mysql'])
  
  }
  
  
  }
  
  
  





