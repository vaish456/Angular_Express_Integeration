import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CustomerService } from './customer.service';
import { CustomerComponent } from './customer/customer.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudFormComponent } from './stud-form/stud-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CustomerComponent,
    StudentComponent,
    StudFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
