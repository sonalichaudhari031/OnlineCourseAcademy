import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent {
  course : Course={
    id: 0,
    title: '',
    name: '',
    email:'',
    num:0

  
    
  };
  constructor(private courseService: CourseService, private route: ActivatedRoute,
    private router: Router,){}
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        var id = Number(param.get('id'));
        this.getCourse(id);
        console.log(id)
      });
    }
   
    getCourse(id:number)
    {
      this.courseService.getCourse(id).subscribe((data) => {
        this.course = data;
    });
  }
    
    updateCourse(): void {
      this.courseService.updateCourse(this.course)
      .subscribe({
        next:(data) => {
          this.router.navigate(["/courses"])
        },
        error:(err) => {
          console.log(err);
        }
      })
    }

}  

