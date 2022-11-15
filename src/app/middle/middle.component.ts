import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  bookId:number=77;
  bookName:string="Ramayanam";
  bookAuthor:string="Kambar";
  bookStatus:string="Available";

  btnToggle:boolean=true;

  constructor() { }
  onToggle(){
    if(this.bookStatus=="Available")
    {
      this.bookStatus="Not Available"
    }
    else{
      this.bookStatus="Available"
    }
  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.btnToggle=false;
    },2000)
  }

}
