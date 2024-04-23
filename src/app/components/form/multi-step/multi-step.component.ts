import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-multi-step',
    templateUrl: './multi-step.component.html',
    styleUrls: ['./multi-step.component.scss'],
})
export class MultiStepComponent implements OnInit {

    @Input() stepValues: string[] = []
    @Input() currentItem:number = 0
    constructor() {
        this.stepValues = []
    }

    ngOnInit() { }

}
