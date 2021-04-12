import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { JsonObject, JsonProperty } from 'json2typescript';
import { ThreadType } from '../../enums/forum/thread-type.enum';

@JsonObject('Thread')
export class Thread {

    @JsonProperty('id', Number)
    public id: number = null;

    @JsonProperty('title', String)
    public title: string = null;

    @JsonProperty('color', String)
    public color: string = null;

    @JsonProperty('shortDescription', String)
    public shortDescription: string = null;

    @JsonProperty('type', String)
    public type: ThreadType = null;

    @JsonProperty('supThread', Thread)
    public supThread: Thread = null;

    @JsonProperty('subThreadList', [Thread])
    public subThreadList: Thread[] = [];

    @JsonProperty('messageList', [Message])
    public messageList: Message[] = [];
}
