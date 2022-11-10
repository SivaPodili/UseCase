import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:9091/profiletracker/api/auth";
const URL1="http://localhost:9092/profiletracker/api/auth";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  createProfile(profile: { associateName: string; associateId: string; mobile: string; email: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.post(URL + '/v1/createprofile', profile, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  searchProfileService(profile: { associateName: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.get(URL1+'/v1/searchprofile'+'?associateName='+profile.associateName,  {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  
  }

  constructor(private http: HttpClient) { }
}
