import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataObject } from '../DataObject';

@Directive({
  selector: '[appHeight]'
})
export class HeightDirective {

  buttonText: DataObject[];
  public height: number = 0;

  constructor(private el : ElementRef, private httpService:HttpClient) { }

  ngOnInit() {

    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.buttonText = data as DataObject[];
        for (let data of this.buttonText) {
          if(this.height < data.text.length)
          this.height = data.text.length;               
        }
        if(this.height > 38)   {
            this.el.nativeElement.style.height = '3.5em';
          }
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

  }

}
