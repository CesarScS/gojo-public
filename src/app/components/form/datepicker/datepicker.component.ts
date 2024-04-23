import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {

    @Input() labelText:String = '';
    @Input() value:String = '';
    @Input() modalId:String = '';
    @Input() shape:String = '';

    constructor() { }

    ngOnInit() { 
    }

    dateChanged(value: any) {
        console.log(value);
    }
}
