import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thread } from '../../../model/beans/forum/thread.model';
import { ThreadService } from '../../../model/services/forum/thread.service';

@Component({
    selector: 'app-thread',
    templateUrl: './thread.Component.html'
})

export class ThreadComponent implements OnInit {
    public threads: Thread[];
    public thread: Thread;

    constructor(
        private threadService: ThreadService,
        private route: ActivatedRoute,
        private router: Router
    ){
        this.threads = [];
    }

    public ngOnInit(): void {
        const idThread = this.route.snapshot.params.id;
        console.log(idThread);
        if (!!idThread){
            this.threadService.getThreadById(idThread).then(
                (data: Thread) => {
                    this.thread = data;
                    this.threads = this.thread.subThreadList;
                    console.log(this.thread);
                }
            );
        }else{
            this.threadService.getThreadList().then(
                (data: Thread[]) => {
                    this.threads = data;
                    console.log(this.threads);
                }
            );
        }
    }

    public goToParentThread(): void {
        const parentId: string = !!this.thread.supThread ? this.thread.supThread.id.toString() : '';

        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
            this.router.navigate(['/forum/thread/' + parentId])
        );
    }
}
