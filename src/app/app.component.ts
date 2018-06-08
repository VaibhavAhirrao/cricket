import { Component } from '@angular/core';
import {RecordService} from './record.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecordService]
})

export class AppComponent {
records = {}
  title = 'VIVO IPL 2018';
teamMember : string[];
newMember :any;
newList : any[];
addMember(){
this.teamMember.push(this.newMember);
}


constructor(private myFirstService : RecordService) { this.teamMember = ['Sachin Tendulkar']; }


ngOnInit(){
  this.myFirstService.getData().subscribe(
    data => this.newList = data['id']
  );
}





}
