import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {StoreUserService} from "../../service/store-user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bool: boolean = true;
  registerForm!: FormGroup;

  constructor(private studentService: StudentService, private userService: UserService, private fb: FormBuilder, private router: Router, private storeUserService: StoreUserService) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.studentService.getStudents().subscribe(student => console.log(student))
  }

  initializeForm(): void {
    this.registerForm = this.fb.group({
      email: ['john@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  sendForm() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      // this.userService.signup(email, password).subscribe(res => console.log(res));
      this.userService.login(this.registerForm.value).subscribe(
        response => {
          // Traiter la réponse
          console.log(response);
          this.userService.getUserByMail(this.registerForm.controls.email.value).subscribe(res => {
            console.log(res);
            this.storeUserService.setUser(res.username);
            this.router.navigate(['/welcome']).then();
          })
        },
        error => {
          // Traiter l'erreur
          console.log(error)
        }
      );
    }
  }

}
