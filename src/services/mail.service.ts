import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MailService {

  private EMAIL_DEFAULT: string = "app.60minutos@gmail.com";

  private API_KEY: string = 'key-8630a671e832b0e328cd2def181eee82';
  private API_DOMAIN: string = 'sandboxd1b8782c7db84703966def7cc4df2f1d.mailgun.org';
  private EMAIL: string = 'mailgun@sandboxd1b8782c7db84703966def7cc4df2f1d.mailgun.org';
  private URL_MAIL: string = 'https://api:' + this.API_KEY + '@api.mailgun.net/v3/' + this.API_DOMAIN + '/messages';

  constructor(private http: Http) {
  }

  sendMail(subject: string, text: string, to: string = null) {
    var payload = new FormData();
    payload.append('from', this.EMAIL);
    payload.append('to', to ? to : this.EMAIL_DEFAULT);
    payload.append('subject', subject);
    payload.append('text', text);
    return this.http.post(this.URL_MAIL, payload);
  }

}
