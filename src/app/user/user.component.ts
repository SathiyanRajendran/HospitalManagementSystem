import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isDisabled: boolean = false
  title = 'My Learning'
  firstName: string = 'Sathiyan'
  lastName: string = 'Rajendran'
  AngularLogo: string = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'
  myfunc1() {
    alert('Hello!')
  }
  courses: string[];
  hide: boolean | undefined;
  constructor() {
    this.courses = ['Angular', 'MVC', 'Azure']
  }
  getCourses(): string[] {
    return this.courses;
  }
  toggle() {
    this.hide = !this.hide;
    console.log(this.hide);
  }

  ngOnInit(): void {
  }

}
