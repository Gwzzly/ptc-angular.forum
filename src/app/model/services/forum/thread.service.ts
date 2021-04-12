import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Thread } from '../../beans/forum/thread.model';
import { CustomJsonConvert } from '../../../core/json/json-converter.utils';

@Injectable()
export class ThreadService{
    private urlRest: string;

    constructor(
        private httpClient: HttpClient,
        private jsonConvert: CustomJsonConvert
    ){
        this.urlRest = 'http://ptcangularforum.ddns.net:49337/';
    }

    getThreadList(): Promise<Thread[]> {
        return this.httpClient.get(this.urlRest + 'threads')
            .toPromise()
            .then((data: any[]) => {
                return this.jsonConvert.deserializeArray(data, Thread);
            });
    }
}
