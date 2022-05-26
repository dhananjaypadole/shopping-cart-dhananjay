import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegistrationForm: any = FormGroup;
  passwordConfirmPass: any = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.RegistrationForm = this.fb.group({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.required]),
      conpassword: new FormControl(null, [Validators.required]),
    },
      {
        validators: this.mustMatch('password', 'conpassword')
      });
  }

  passwordValidation() {
    if (this.RegistrationForm.controls.password.value == (this.RegistrationForm.controls.conpassword.value)) {
      return true;
    }
    return true;
  }

  get f() {
    return this.RegistrationForm.controls;
  }

  mustMatch(password: any, confirmpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmpasswordcontrol = formGroup.controls[confirmpassword];

      if (confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors['mustMatch']) {
        return;
      }
      if (passwordcontrol.value !== confirmpasswordcontrol.value) {
        confirmpasswordcontrol.setErrors({ mustMatch: true })
      } else {
        confirmpasswordcontrol.setErrors(null)
      }
    }
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('password', form.value.password);
  }

}