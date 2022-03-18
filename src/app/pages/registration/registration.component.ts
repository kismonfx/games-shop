import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { registration } from "../../store/actions/auth.action";
import { Store } from "@ngrx/store";
import { User } from "../../models/user.model";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.less"]
})
export class RegistrationComponent implements OnInit {

  constructor(private store$: Store) {
  }

  ngOnInit(): void {
  }

  hide = true;

  regForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z0-9]*")]),
    pass: new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z0-9]*")]),
      confirmPassword: new FormControl(null, [Validators.required]),
    }, this.passwordValidator)
  });

  onSubmit(): void {
    if (this.regForm.valid) {
      const user: User = {
        username: this.regForm.value.username,
        password: this.regForm.value.pass.password,
      };
      this.store$.dispatch(registration({ user }));
    }
  }

  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if ((control.value.password === control.value.confirmPassword) || !control.value.confirmPassword) {
      return null;
    }
      return { "passwordError": true };

  }
}
