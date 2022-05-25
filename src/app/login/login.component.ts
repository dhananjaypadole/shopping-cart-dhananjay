import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: any = FormGroup;
  passwordConfirmPass: any = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.required]),
    });
  }

  get f() {
    return this.LoginForm.controls;
  }
  onSubmit(form: FormGroup) {
    debugger
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
    console.log('password', form.value.password);
  }

}
