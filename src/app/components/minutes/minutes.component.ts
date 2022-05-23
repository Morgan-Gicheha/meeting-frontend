import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

import { MinutesService } from './minutes.service';


@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit {
  data: any
  test: any = 'cjdcdkc';
  constructor(
    private _snackBar: MatSnackBar,
    private minuteServics: MinutesService

  ) { }

  form: FormGroup = new FormGroup({
    meeting_minutes: new FormControl(""),
    file_url: new FormControl(""),
    // manual_file_link: new FormControl(""),
  });


  submit() {
    this.minuteServics.postMeeting(this.form.value).subscribe(
      () => {
        this._snackBar.open('Minutes saved','Hide')
      }
    )
  }
fetch(){
  this.minuteServics.getMeeting().subscribe((res) => {this.data = res})
}


  ngOnInit(): void {
    this.fetch()
  }

}
