 
 export interface MeetingGetShema{
     id:number;
     meeting_title:string;
     time_posted:string;
     meeting_minutes:string;
     file_url:string;

 }
  export interface MeetingPostShema{
    user_id:number;
     meeting_title:string;
     meeting_minutes?:string;
     file_url?:string;

 }

 