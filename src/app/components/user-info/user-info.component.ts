import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.less"]
})
export class UserInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { username: string, isAdmin: boolean }) { }

  ngOnInit(): void {
  }

}
