import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_modals/user';



export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
 
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

     get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

    login(username: any, password: undefined) {
        return this.http.post<any>(`${environment.baseurl}/authenticate`, { username, password })
            .pipe(map(user => {
                //console.log(user.token);
                
                user.authdata = window.btoa(username + ":" + password);
                localStorage.setItem('access_token', `Bearer ${user.token}`);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('user_name', JSON.stringify(user.username));
               //console.log(user);
                this.userSubject.next(user);
                return user;
                
            }));
    }

    logout() {
        localStorage.clear();
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }


    register(user: User) {
       // console.log(user); 
      return this.http.post(`${environment.baseurl}/register`, user);
  }

  getToken(){
    return localStorage.getItem('access_token');
  }

  getActivityType(){
    return this.http.get(`${environment.baseurl}/activityTypes`);
  }

  getUserName(){
    return localStorage.getItem('user_name');
   }

   userDetails(){
    return this.http.get(`${environment.baseurl}/user`);
   }

   updateUser(user: User){
   
    return this.http.put(`${environment.baseurl}/update/user`, user);
   }
}
