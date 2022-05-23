import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { MeetingService } from './meeting.service';
import { MeetingGetShema } from '../schemas/meeting';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostmeetingformDialogComponent } from '../postmeetingform-dialog/postmeetingform-dialog.component';
 

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  meetings$ :Observable<MeetingGetShema[]>;
  displayedColumns: string[] = ['id','meeting_title', 'time_posted','file_url','action'  ];
 


  constructor(
    private meetingsService:MeetingService,public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostmeetingformDialogComponent)
dialogRef.afterClosed().subscribe(
  ()=>{
    setTimeout(() => {
      this.fetcher()
    }, 1500);
    
  }
)
 
  }
 

  populate(id:number){
    this.meetingsService.id$.next(id)
  }


  
  fetcher(){
    this.meetingsService.getMeeting(1).subscribe(
      ()=>{
 
        this.meetings$ = this.meetingsService.meetingSource$,
        console.log("fetching")
      }
   )
  }

  ngOnInit(): void {
    this.fetcher()

  }

}
