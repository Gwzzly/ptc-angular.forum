import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Thread } from '../../../model/beans/forum/thread.model';

@Component({
    selector: 'app-sub-thread',
    templateUrl: './sub-thread.Component.html'
})

export class SubThreadComponent {

    @Input()
    public subThread: Thread;

    constructor(){
    }

}
