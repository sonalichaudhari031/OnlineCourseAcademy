import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent {
  newCourse: Course = {
    id: 1,
    title: 'dfs',
    name: 'vv',
    email: 'assd',
    num: 123
  };

  constructor(private courseService: CourseService, private router: Router) {}

  createCourse(): void {
    this.courseService.createCourse(this.newCourse)
      .subscribe({
        next: (data) => {
          this.router.navigate(['/create']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
