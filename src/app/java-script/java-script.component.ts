import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css']
})
export class JavaScriptComponent {

constructor(private route : Router){}

load5()
{
  this.route.navigate(['javascript'])
}


}
