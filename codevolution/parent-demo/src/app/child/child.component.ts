import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() greetEvent = new EventEmitter();
  name = 'Pridesys IT';

  constructor() { }

  ngOnInit() {

  }

  callParentGreet(){
    this.greetEvent.emit(this.name);
    //alert('Sending the message');
  }

}
