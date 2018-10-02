import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  // @Input('loggedIn')  loginFlag: boolean;
  @Input('loggedIn')
  loginFlag: boolean;
  message: string;
  name = "Bipon";

  // get loggedIn(): boolean{
  //   return this._loggedIn;
  // }
  // @Input()
  // set loggedIn(value:boolean){
  //   this._loggedIn = value;
  //   if(value === true){
  //     this.message = 'welcome back bipon';
  //   }else{
  //     this.message = 'please log in'
  //   }
  // }

  constructor() {}

  ngOnInit(){

  }

  // ngOnChanges(changes: SimpleChange) {
  //   console.log(changes);
  //   const loggedInValue = changes["loggedIn"];
  //   if (loggedInValue.currentValue === true) {
  //     this.message = "Welcome back Biswas";
  //   } else {
  //     this.message = "Please log in";
  //   }
  // }
  greetBiswas() {
    alert("Hello Biswas");
  }
}
