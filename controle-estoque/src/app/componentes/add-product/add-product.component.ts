import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product'
import { ProductService } from '../../services/product.service'
import { NgForm } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {} as Product;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addProduct(form: NgForm) {
    if (this.product.id !== undefined) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.cleanForm(form);
      });
      let message = "O produto foi atualizado com sucesso!";
      return message;
    } else {
      this.productService.addProduct(this.product).subscribe(() => {
        this.cleanForm(form);
      });
      let message = "O produto foi cadastrado com sucesso!";
      return message;
    }
  }

  cleanForm(form: NgForm) {
    // this.getProducts();
    form.resetForm();
    this.product = {} as Product;
  }
}
