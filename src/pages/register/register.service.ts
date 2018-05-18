import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Signin } from '../../model/Signin';

@Injectable()
export class RegisterService {
  private urlRegister = 'https://dev-744009.oktapreview.com/api/v1/users?activate=false';

  constructor(private http: Http) {

  }

  register(signin: Signin): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Authorization', 'SSWS 00trG2GtoQy4ccLbHx1MWS2f97l1HJruvt--PrDcMU');
    headers.append('accept', "application/json");
    headers.append('content-type', "application/json");

    let options = new RequestOptions({ headers: headers });


    var body = {
      'profile': {
        'firstName': signin.firstName,
        'lastName': signin.lastName,
        'email': signin.email,
        'login': signin.login
      },
      'credentials': {
        'password': { 'value': signin.password }
      }
    }
    return this.http.post(this.urlRegister, body, options)
      .map((response: Response) => response.json());
  }
}
