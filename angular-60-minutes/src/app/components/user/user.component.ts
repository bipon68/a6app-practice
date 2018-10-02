import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor run..');
  }

  ngOnInit() {
    console.log('ngInit run..');
    this.name = 'John doe';
    this.email = 'test@pridesys.com';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'watch movie', 'Travel', 'Listen to music'];
    this.hello = 'hello';

    /* In the constructor, we're creating an instance of our service.
    Then, within the lifecycle hook ngOnInit() (this runs when the component loads),
    we're calling our getPosts() method and subscribing to it.*/
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts)
    });
  }
  onClick(){
    this.name = 'Pridesys IT',
    this.hobbies.push('New hobby'),
    console.log('Hello click')
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    console.log(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
    console.log(hobby);
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number,
  title: string,
  body:string,
  userId:number
}
