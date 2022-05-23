import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';

import { MeetingService } from '../meetings/meeting.service';

@Component({
  selector: 'app-postmeetingform-dialog',
  templateUrl: './postmeetingform-dialog.component.html',
  styleUrls: ['./postmeetingform-dialog.component.css']
})
export class PostmeetingformDialogComponent implements OnInit {

  constructor(
    private meetingsService:MeetingService,
    private _snackBar: MatSnackBar
  ) { }

  form: FormGroup = new FormGroup({
		meeting_title: new FormControl(""),
	});

  ngOnInit(): void {
  }

  submit() {
    let formdata = this.form.value
    formdata.user_id = 1
    console.log(formdata)
    this.meetingsService.postMeeting(formdata).subscribe(()=>{ this._snackBar.open("Sent","Hide");}
      
    )
	}

}
