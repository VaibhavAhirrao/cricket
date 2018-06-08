import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http'; 


@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private _http: Http){
}
getData() {
  
    return this._http.get('http://localhost/cricket/api/list.php');
 

}

}
