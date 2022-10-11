import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  template:
    '<app-leave-message-success [yourname]="yourname"></app-leave-message-success>',
})
export class ContactComponent implements OnInit {
  public message = '';
  public yourname = '';
  public email = '';
  constructor(private router: Router, public router1: ActivatedRoute) {}

  ngOnInit(): void {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  public checkemailEntered(): void {
    if (
      !this.emailFormControl.hasError('email') &&
      !this.emailFormControl.hasError('required') &&
      !this.emailFormControl.hasError('required')
    ) {
      this.router.navigate(['/contact/contactsuccess']);
    }
  }
  public printYourname(): void {
    console.log(this.yourname);
  }
}
