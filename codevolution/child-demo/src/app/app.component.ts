import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'child-demo';

  userLoggedIn = true;
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;
  ngAfterViewInit(){
    this.childComponentRef.message = "Message from parent component";
  }

}
