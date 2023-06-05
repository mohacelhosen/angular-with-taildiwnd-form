import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { RegistrationModel } from '../../model/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  singUpForm!: FormGroup;
  registrationData!: RegistrationModel;
  passeordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.singUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18), Validators.pattern(this.passeordRegex)]],
      confirmPassword: ['', [Validators.required, this.matchPasswordValidator('password')]],
      termsIsAccept: [false, Validators.required]
    });
  }

  onSubmit() {
    if (this.singUpForm.valid) {
      this.registrationData = this.singUpForm.value;
      // You can access the form data via this.registrationData and perform further actions
      console.log(this.registrationData);
    }
  }

  matchPasswordValidator(controlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = control.root.get(controlName);
      const passwordValue = passwordControl?.value;
      const confirmPasswordValue = control.value;

      if (passwordValue !== confirmPasswordValue) {
        return { passwordMismatch: true };
      }

      return null;
    };
  }
}
