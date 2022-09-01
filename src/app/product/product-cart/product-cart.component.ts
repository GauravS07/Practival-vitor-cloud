import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

  
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  localProducts: Array<any> = [];
  totalPrice: number = 0;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {

    if (localStorage.getItem("productsData") !== null) {
      this.localProducts = JSON.parse(localStorage.getItem("productsData") || '{}');
    }

  }


  deleteItem(proInfo: any) {
    this.localProducts = JSON.parse(localStorage.getItem("productsData") || '{}');
    for (let i = 0; i < this.localProducts.length; i++) {
      if (this.localProducts[i]['id'] == proInfo.id) {
        this.localProducts.splice(i, 1);
        localStorage.setItem('productsData', JSON.stringify(this.localProducts));
        this.toastr.success('Product Removed');
        return true;
        
      }
    }
    this.toastr.error('Failed');
    return false
  }


  
}
