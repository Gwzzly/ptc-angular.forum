import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThreadService } from '../../model/services/forum/thread.service';
import { ForumRoutingModule } from './forum.routing';
import { SubThreadComponent } from './subThread/sub-Thread.component';
import { ThreadComponent } from './thread/thread.component';

@NgModule({
    declarations: [
        ThreadComponent,
        SubThreadComponent
    ],
    imports: [
        CommonModule,
        ForumRoutingModule
    ],
    exports: [],
    providers: [ThreadService]
})
export class ForumModule { }
