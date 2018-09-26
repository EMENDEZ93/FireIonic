import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {UserRegister} from "../../models/user/resgister";

@Injectable()
export class RegisterService {

  constructor(public http: HttpClient){
  }

  postRegister(userRegister: UserRegister){
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http
      .post('https://fire-backend.herokuapp.com/user/save',
        JSON.stringify(userRegister), httpOptions).subscribe();
  }

}
