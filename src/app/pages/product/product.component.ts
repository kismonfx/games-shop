import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getColor(rating: number): string{
    if(rating>=75){
      return '#37a810';
    } else if (rating>=50){
      return '#cec325';
    } else if (rating>=30){
      return '#f7aa38';
    } else{
      return '#ec2f3e';
    }
  }

}
