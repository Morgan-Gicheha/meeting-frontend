import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { MinutesComponent } from './components/minutes/minutes.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  // {path:"logout", component:LoginComponent},
  {path:"meeting", component:MeetingsComponent},
  {path:"", component:MeetingsComponent},
  {path:"minutes", component:MinutesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
