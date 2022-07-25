import { Component, OnInit, } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  date: any;
  islogin: any;
  constructor(public service: ServiceService) {
    this.date = new Date().getFullYear()
    this.islogin = localStorage.getItem('isLogin')

  }

  ngOnInit(): void {

  }


}

