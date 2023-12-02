import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreUserService} from "../../service/store-user.service";
import {MatCardModule} from "@angular/material/card";
import {UserService} from "../../service/user.service";
import {User} from "../../core/model/user";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  user: any;
  students: any[] = [];

  constructor(private storeUserService: StoreUserService, private studentService: StudentService,) {
  }

  ngOnInit(): void {
    this.user = this.storeUserService.getUser();
    this.studentService.getStudents().subscribe(res => {
      console.log(res)
      this.students = res;
    })
    console.log(this.user);
  }

}
