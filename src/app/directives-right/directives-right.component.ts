import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-right',
  templateUrl: './directives-right.component.html',
  styleUrls: ['./directives-right.component.css']
})
export class DirectivesRightComponent implements OnInit {
  books1=null;
  books = [{
    'bookId': 101,
    'bookName': 'Ponniyinselvan',
    'author': 'Kalki',
    'bookStatus': 'Available',
    'category': 'history'
  },
  {
    'bookId': 102,
    'bookName': 'Ponniyinselvan',
    'author': 'Kalki',
    'bookStatus': 'Available',
    'category': 'history'
  },
  {
    'bookId': 103,
    'bookName': 'Ponniyinselvan',
    'author': 'Kalki',
    'bookStatus': 'Not Available',
    'category': 'history'
  },
  {
    'bookId': 104,
    'bookName': 'Ponniyinselvan',
    'author': 'Kalki',
    'bookStatus': 'Not Available',
    'category': 'history'
  },
  {
    'bookId': 105,
    'bookName': 'Ponniyinselvan',
    'author': 'Kalki',
    'bookStatus': 'Not Printing',
    'category': 'history'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
