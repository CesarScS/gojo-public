import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
})
export class SeparatorComponent  implements OnInit {

  @Input() text:String = '';

  constructor() { }

  ngOnInit() {}

}
