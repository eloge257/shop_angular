import { Component } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginform = new FormGroup({
    email : new FormControl(),
    name : new FormControl(),
    password : new FormControl(),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginform.value);
  }

}
