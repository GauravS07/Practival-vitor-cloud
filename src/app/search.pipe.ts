
//pipe to help in real time search in product which
//take term user search for and filter it from an array of products
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[] , term:string): any {
  if(term == undefined)
  {
    return products;
  }
    return products.filter(function(products){
          return products.title.toLowerCase().includes(term.toLowerCase())
    });
  }

}
