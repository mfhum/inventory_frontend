import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppConfigService {
  public inventoryBackend: string;

  constructor(private http: HttpClient) {}

  load(): Promise<any> {
    const hostname = window.location.hostname;
    let configFile: string = null;
    console.log(hostname);
    switch (hostname) {
      case 'localhost':
        console.log('Initializing LOCAL env');
        configFile = '/assets/app.local.config.json';
        break;
    }

    const promise = this.http.get(configFile);
      .toPromise()
      .then(data => {
        Object.assign(this, data);
        return data;
      });

    return promise;
  }
}
