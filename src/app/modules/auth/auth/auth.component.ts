import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.less"]
})
export class AuthComponent implements OnInit {

  links = ["login", "registration"];
  titles = ["Вход", "Регистрация"];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
