import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
   styles:[
    `
    h3{
      color:dodgerblue;
    }
    `
   ]
})
export class AppComponent {
  title = 'HospitalManagementSystem';
  someValue:string="";
  someValues:Array<string>=new Array<string>();
  CallSomeLogic()
  {
    this.someValues.push(this.someValue)
    this.someValue="";
  }
  courses=[{id:1,name:'Angular',skill:'Frontend'},
           {id:2,name:'AWS Training',skill:'Frontend'},
           {id:3,name:'ReactJS Training',skill:'Cloud'}
]
Myweb:any[]=[{
  'type':'Frontend',
  'courses':[
    {
      'name':'Angular'
    },
    {
      'name':'ReactJs'
    },
    {
      'name':'VueJs'
    }
  ]
},
{
  'type':'Backend',
  'courses':[
    {
      'name':'MongoDb'
    },
    {
      'name':'MySQL'
    },
    {
      'name':'Express'
    }
  ]
}]

isLoggedIn=true;
isNewUser:boolean=false;
Login(){
  this.isLoggedIn=true;
}
Logout(){
  this.isLoggedIn=false;
}
}
