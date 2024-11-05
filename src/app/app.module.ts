import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


import { CoursesDataComponent } from './courses-data/courses-data.component';
import { JavaComponent } from './java/java.component';
import { PythonComponent } from './python/python.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { AngularJsComponent } from './angular-js/angular-js.component';

import { CertificationComponent } from './certification/certification.component';
import { AboutComponent } from './about/about.component';
import { MySqlComponent } from './my-sql/my-sql.component';

@NgModule({
  declarations: [
    AppComponent,
  
    CourseCreateComponent,
    CourseEditComponent,
    HomeComponent,
    
    CoursesDataComponent,
    JavaComponent,
    PythonComponent,
    JavaScriptComponent,
    AngularJsComponent,
    CertificationComponent,
    AboutComponent,
    MySqlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
