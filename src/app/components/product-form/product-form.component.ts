import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Product } from "../../models/product.model";

@Component({
  selector: "app-create-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.less"]
})
export class ProductFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product, public dialogRef: MatDialogRef<ProductFormComponent>) { }

  ngOnInit(): void {
    if (this.data) {
      this.setForm(this.data);
      this.form.controls["image"].clearValidators();
    }
  }

  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    developer: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    rating: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
    platform: new FormControl(null, [Validators.required]),
    genre: new FormControl(null, [Validators.required]),
    release: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
  });

  setForm(product: Product): void{
    this.form.get("title")?.setValue(product.title);
    this.form.get("developer")?.setValue(product.developer);
    this.form.get("description")?.setValue(product.description);
    this.form.get("price")?.setValue(product.price);
    this.form.get("rating")?.setValue(product.rating);
    this.form.get("platform")?.setValue(product.platform);
    this.form.get("genre")?.setValue(product.genre);
    this.form.get("release")?.setValue(new Date(product.release).toLocaleDateString("en-CA"));
  }

  onSubmit(): void{
    if (this.form.valid){
      this.dialogRef.close({ ...this.form.value, uploadImage: this.selectedFile });
    }
  }

  selectedFile?: File;
  onFileSelected(event: Event): void {
    // @ts-ignore
    this.selectedFile = event.target.files[0];
  }


}
