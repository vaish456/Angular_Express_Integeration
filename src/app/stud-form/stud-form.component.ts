import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';
import { IStudent } from '../IStudent';

@Component({
  selector: 'app-stud-form',
  templateUrl: './stud-form.component.html',
  styleUrls: ['./stud-form.component.css']
})
export class StudFormComponent implements OnInit {

  public students :IStudent[] = [];
  constructor(private studService : StudentService) { }

  ngOnInit(): void {
  }
  
  // onSubmit(myform:NgForm ){

  //   this.students = myform.value;
  //   //console.log("form submit "+myform.value);
  //   console.warn(myform.value);
  //   this.studService.saveDetails(this.students)
  //   .subscribe(data => console.log("sucess",data));
  // }
  onSubmit(myform:NgForm){
    var newStudent = {
     // id: myform.value.id,
      student_id : myform.value.student_id,
      student_name : myform.value.student_name,
      school : myform.value.school,
      admit_date : myform.value. admit_date,
    }
    this.studService.saveDetails(newStudent)
    .subscribe(data => console.log("sucess",data));
  }

}
