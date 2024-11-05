import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    certifications = [
      {
        title: 'Front-end Development',
        description: 'Master front-end development technologies.',
        imgUrl: 'https://images.pexels.com/photos/5649518/pexels-photo-5649518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        link: '#'
      },
      {
        title: 'Database',
        description: 'Learn data manipulation, visualization, and also learn database technologies.',
        imgUrl: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        link: '#'
      },
      {
        title: 'Backend Development',
      
        description: 'Boost your backend skills with learn many technologies .',
        imgUrl: 'https://media.istockphoto.com/id/2148923925/photo/programmer-coding-classes-web-developer-coder.jpg?s=612x612&w=0&k=20&c=RTlvfId3_jqKlE2osQ069rJJb1lPRsV8gROJ4Jrzn30=',
        link: '#'
      }
    ];
  }
  









  
  

