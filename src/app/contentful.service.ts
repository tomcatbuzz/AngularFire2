import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  // console logs a response for debugging
  logContent(contentId) {
    this.client.getEntry(contentId)
      .then((entry) => console.log(entry));
  }

  // retrieves content mapped to its data fields Check RXJS 6 NOTE*************
  getContent(contentId) {
    const promise = this.client.getEntry(contentId);
    return Observable.from(promise).map(entry => entry.fields);
  }

  // convert markdown to string
  markdownToHtml(md: string) {
    return marked(md);
  }
}
