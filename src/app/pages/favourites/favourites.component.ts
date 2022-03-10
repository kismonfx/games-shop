import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";


@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.less"]
})
export class FavouritesComponent implements OnInit {


  constructor(private store$: Store) {
  }

  ngOnInit(): void {
  }

}
