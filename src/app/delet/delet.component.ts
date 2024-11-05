import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-delet',
  templateUrl: './delet.component.html',
  styleUrls: ['./delet.component.css']
})
export class DeletComponent {

  courses : Course[]=[];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadcourses();
  }

  loadcourses(): void {
    this.courseService.getCourses()
      .subscribe(c => this.courses = c);
  }
  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id)
      .subscribe(() => {
        this.loadcourses();
      });
  }



}
