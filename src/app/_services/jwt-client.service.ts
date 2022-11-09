import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../_modals/user";

@Injectable({
    providedIn:'root'
    
})
export class JwtClientService{

    // authRequest:any={
    //     "userName":"98d0fff50f634835af88bff4eb574f12",
    //     "password":"a77cf8eb4eb5496ba434616d75ca9929"
    // }

    constructor(private http:HttpClient){

    }

    public generateToken(user:User){
       
        let response= this.http.post("http://localhost:8089/authenticate",user,{responseType: 'text' as 'json'});
        response.subscribe(data=>
            {
                console.log(data);
                localStorage.removeItem('access_token');
                localStorage.setItem('access_token', `Bearer ${data}`);
              
            } 
        );
    }

    getToken(){
      return localStorage.getItem('access_token');
    }

    

}