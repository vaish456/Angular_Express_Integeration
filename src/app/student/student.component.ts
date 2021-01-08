import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import { IStudent } from '../IStudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students:IStudent[] = [];
  constructor(private studService : StudentService) { 
   
  }

  ngOnInit(): void {
    this.studService.getAllStudents().subscribe(list => this.students = list);
  }

}
