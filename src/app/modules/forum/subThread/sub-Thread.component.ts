import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from '../../../model/beans/forum/thread.model';

@Component({
    selector: 'app-sub-thread',
    templateUrl: './sub-thread.Component.html'
})

export class SubThreadComponent {

    @Input()
    public subThread: Thread;

    constructor(
        private router: Router
    ){
    }

    public goToSubThread(): void {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
            this.router.navigate(['/forum/thread/' + this.subThread.id])
        );
    }

}
