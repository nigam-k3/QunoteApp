import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpassForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgetPasswordForm();
  }
  forgetPasswordForm() {
    this.forgetpassForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9_.\-]+)@([a-zA-Z0-9_.\-]+)[.]([a-zA-Z]{2,5})$'),
          Validators.maxLength(255)]
      ]
    });
  }
  onSUbmit() {
    console.log(this.forgetpassForm.value);

  }
}
