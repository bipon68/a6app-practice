import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // property binding
  pageTitle ='Angular Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string = "";
  userName: string = "";
  private _customerName:string = "";
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  // getter
  get customerName(): string {
    return this._customerName;
  }
  // setter
  set customerName(value:string){
    this._customerName = value;
    if(value == 'bipon'){
      alert('hello bipon');
    }
  }

  // event biding
  incrementCounter(){
    this.count += 1;
  }

  // two way binding split
  biponBiswas(updateValue){
    this.userName = updateValue;
    if(updateValue == 'bipon'){
      alert('Welcome back bipon');
    }
  }


}
