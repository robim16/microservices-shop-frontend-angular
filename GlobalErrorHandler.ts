import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgZone } from '@angular/core'; // Optional: for running outside of Angular zone

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector, private zone: NgZone) {}

  handleError(error: any): void {

    if (error instanceof HttpErrorResponse) {
      console.error('HTTP Error:', error.status, error.message);
    } else {
      console.error('An uncaught error occurred:', error);
      
    }
  }
}
