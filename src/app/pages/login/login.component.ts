import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth/auth.service";
import { Store } from "@ngrx/store";
import { login } from "../../store/actions/auth.action";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private store$: Store) { }

  ngOnInit(): void {
  }

  hide = true;

  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z0-9]*")]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z0-9]*")]),
  });

  onSubmit(): void{
    if (this.loginForm.valid){
      this.store$.dispatch(login({ user: this.loginForm.value }));
    }
  }

}
