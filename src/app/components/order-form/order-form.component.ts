import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.less"]
})
export class OrderFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string, status: string }, public dialogRef: MatDialogRef<OrderFormComponent>) { }

  ngOnInit(): void {
  }

  listOfStatus: string[] = ["В обработке", "Выполнен", "Отклонен"];
  status: string = this.data.status;
}
