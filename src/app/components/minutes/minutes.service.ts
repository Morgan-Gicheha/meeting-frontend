import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MeetingService } from '../meetings/meeting.service';

@Injectable({
  providedIn: 'root'
})
export class MinutesService {
   id :any
  constructor(private http: HttpClient,private service:MeetingService) { 
   
    
  }
 
    // posting a meeting
    postMeeting(data:any):Observable<any>{
    
      this.service.id$.subscribe((res)=>{this.id = res})
      return this.http.put<any>(environment.baseUrl+'/meetings/'+this.id+'/user/1',data)
  
    }
     // posting a meeting
     getMeeting( ):Observable<any>{
    
      this.service.id$.subscribe((res)=>{this.id = res})
      return this.http.get<any>(environment.baseUrl+'/meetings/'+this.id+'/user/1')
  
    }

}
