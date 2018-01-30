import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    public http: HttpClient
  ){}
  ngOnInit() {
    this.getProductos2();
  }
  getProductos(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getProductos2(){
    this.getProductos().subscribe(
      result => {

        if(result.code != 200){
          console.log(result);
        }else{

        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
