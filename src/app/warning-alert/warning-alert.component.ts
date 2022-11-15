import { Component } from "@angular/core";

@Component({
   selector:'app-warning-alert',
  //  String Interpolation
   template:`<p>{{'ServerId'}}  {{ServerId}} is in {{getServerStatus()}}</p>`,
   styles:[`
   p
   {padding:20px;
  background-color:mistyrose;
  border:1px solid red
}
`]
})
export class WarningAlertComponent{
  ServerId:number=10;
  ServerStatus:string='Offline';
  getServerStatus(){
    this.ServerStatus;
  }
}