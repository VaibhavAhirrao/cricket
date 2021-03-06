import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { CoachComponent } from './coach/coach.component';

const appRoutes: Routes = [
  {'path' : 'player', component:PlayerComponent},
  {'path' : 'team', component:TeamComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    CoachComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule {

 }
