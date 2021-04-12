import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Thread } from '../../../model/beans/forum/thread.model';
import { ThreadService } from '../../../model/services/forum/thread.service';

@Component({
    selector: 'app-thread',
    templateUrl: './thread.Component.html'
})

export class ThreadComponent implements OnInit {
    public threads: Thread[];

    constructor(private threadService: ThreadService){
        this.threads = [];
    }

    public ngOnInit(): void {
        this.threadService.getThreadList().then(
            (data: Thread[]) => {
                this.threads = data;
                console.log(this.threads);
            }
        );
    }
}
