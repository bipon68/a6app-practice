import { Component } from '@angular/core';
import { User } from './user';
import { Injectable } from '@angular/core';
import { EnrollmentService } from './enrollment.service'


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'Vue', 'React', 'Javascript', 'Html', 'Css'];
  userModel = new User('Rob', 'rob@test.com', 1234567899, 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';


  constructor(private _enrollmentService:EnrollmentService){}



  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error! Sad', error)
      )
    //console.log(this.userModel);
  }

}
