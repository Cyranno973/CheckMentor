import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {Router} from "@angular/router";
import {StoreUserService} from "../../service/store-user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
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
      username: ['', [Validators.required]],
      email: ['john@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]]
    }, {validators: this.matchPassword})
  }

  matchPassword(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.passwordConfirm.value;
    return pass === confirmPass ? null : {notSame: true}
  }

  sendForm() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      // this.userService.signup(email, password).subscribe(res => console.log(res));
      this.userService.signup(this.registerForm.value).subscribe(
        response => {
          // Traiter la réponse
          console.log(response);
          this.storeUserService.setUser(this.registerForm.controls.username.value);
          this.router.navigate(['/welcome']).then();
        },
        error => {
          // Traiter l'erreur
          console.log(error)
        }
      );
    }
  }
}
