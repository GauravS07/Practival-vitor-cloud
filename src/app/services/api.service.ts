import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
) { }

getProductList() {
    return this.http.get('https://fakestoreapi.com/products');
}

// getCustomerDetails(id: any){
//   return this.http.get(`https://fst-invoice.herokuapp.com/api/customers/${id}`);
// }

// createCustomer(payload: any){
//     return this.http.post('https://fst-invoice.herokuapp.com/api/customers',payload);
// }

// updateCustomer(payload: any){
//     return this.http.put(`https://fst-invoice.herokuapp.com/api/customers/${payload.id}`,payload);
// }

// deleteCustomer(id: number){
//     return this.http.delete(`https://fst-invoice.herokuapp.com/api/customers/${id}`)
// }
}
