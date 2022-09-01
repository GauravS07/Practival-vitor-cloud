import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: any = [];
  productsArr: any = []; //local array
  term: any;
  newObj: any
  isLoading: Subject<boolean> = this.loader.isLoading;
  isLoaded = false;


  constructor(private apiService: ApiService, private loader: LoaderService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getProdductList();
  }

  getProdductList() {
    this.apiService.getProductList().subscribe((response: any) => {
      this.productList = response;
      this.isLoaded = true;
    });
  }


  addToCart(proData: any) {
    this.newObj = proData;
    if (localStorage.getItem('productsData') == null) {
      this.productsArr = [];
      this.productsArr.push(proData);
      localStorage.setItem('productsData', JSON.stringify(this.productsArr));
      this.toastr.success("Added To Cart");
    } else {
      this.productsArr.push(proData);
      localStorage.setItem('productsData', JSON.stringify(this.productsArr));
      this.toastr.success("Added To Cart"); 
    }
  }


}
