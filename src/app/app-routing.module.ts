

 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { CourseCreateComponent } from './course-create/course-create.component';
 import { CourseEditComponent } from './course-edit/course-edit.component';
 import { HomeComponent } from './home/home.component';
 import { CoursesDataComponent } from './courses-data/courses-data.component';
 import { JavaComponent } from './java/java.component';
 import { PythonComponent } from './python/python.component';


 import { AngularJsComponent } from './angular-js/angular-js.component';
 import { JavaScriptComponent } from './java-script/java-script.component';
 import { CertificationComponent } from './certification/certification.component';
 import { AboutComponent } from './about/about.component';
import { MySqlComponent } from './my-sql/my-sql.component';
// // other imports...

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses/create', component: CourseCreateComponent },
  { path: 'courses/home', component: HomeComponent },

{ path: 'courses/edit/:id', component: CourseEditComponent },
   { path: 'courses/coursedata', component: CoursesDataComponent },
   // other routes...

   {
     path:'courses/java',component:JavaComponent
 },

{
     path:'courses/python',component:PythonComponent
},

 
{
   path:'courses/angular',component : AngularJsComponent
  },
  {
   path:'courses/javascript',component:JavaScriptComponent
  
  },

  {
   path:'courses/Certification',component:CertificationComponent
  },
 {
  path:'courses/about',component:AboutComponent
  },

  {
  path:'courses/mysql',component:MySqlComponent
  },
 ];


 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }

