import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Message')
export class Message {

    @JsonProperty('id', Number)
    public id: number = null;

    @JsonProperty('content', String)
    public content: string = null;

}
