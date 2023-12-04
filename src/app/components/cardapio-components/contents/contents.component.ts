import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  constructor( private eventService:EventsService){}

  msg:boolean = false
  txt:string = "";
  show:string=""

  load:boolean = true;
  
  ngOnInit(): void {
    this.eventService.msg$.subscribe(({ msg, txt }) => {
      this.msg = msg;
      this.txt = txt;
      this.show = "show"
      setTimeout(() => {
        this.show = "";
      }, 2000);
      setTimeout(() => {
        this.msg = false;
      }, 3000);
    });

    setTimeout(() => {
      this.load = false;
    }, 2000);
  }

}
