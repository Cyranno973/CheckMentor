import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  bool: boolean = true;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
   // this.userService.getStudents().subscribe(student => console.log(student));
  }
}
