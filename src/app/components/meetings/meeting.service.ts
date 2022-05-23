import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { MeetingGetShema } from '../schemas/meeting';
import { MeetingPostShema } from '../schemas/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }


  private meetingSource = new BehaviorSubject<MeetingGetShema[]>(null!);
   id$ = new BehaviorSubject<number>(null!);
	meetingSource$ = this.meetingSource.asObservable();

// gettiing meeting

  getMeeting(uid:number):Observable<void>{
    return this.http.get<MeetingGetShema[]>(environment.baseUrl+'/meetings/'+uid).pipe(
      map((res)=>{
        this.meetingSource.next(res)
      })
    )

  }

  // posting a meeting
  postMeeting(data:MeetingPostShema):Observable<any>{
    return this.http.post<MeetingPostShema>(environment.baseUrl+'/meetings/',data)

  }


}
