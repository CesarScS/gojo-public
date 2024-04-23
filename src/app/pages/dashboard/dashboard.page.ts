import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
  }

  navigate(url:String){
    console.log(url)
    // this._router.navigate([url]);
  }
}
