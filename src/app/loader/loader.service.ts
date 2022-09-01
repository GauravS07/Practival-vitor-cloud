import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = new Subject<boolean>();
    show() {
      this.spinner.show();
    }
    hide() {
      this.spinner.hide();
    }

  constructor(private spinner: NgxSpinnerService) { }
}
