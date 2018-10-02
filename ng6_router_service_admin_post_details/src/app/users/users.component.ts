import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],

  // Add this:
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users$:Object;

  constructor(private data:DataService) { }

  ngOnInit() {
        /* In the constructor, we're creating an instance of our service.
    Then, within the lifecycle hook ngOnInit() (this runs when the component loads),
    we're calling our getUsers() method and subscribing to it. Inside, we're binding
    our users$ object to the result returned by the API.*/
    this.data.getUsers().subscribe((users) => {
      this.users$ = users;
      //console.log(users)
    });
    // this.data.getUsers().subscribe(
    //   data => this.users$ = data
    // )

  }

}
