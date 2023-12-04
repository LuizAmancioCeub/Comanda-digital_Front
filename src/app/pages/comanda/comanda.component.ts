import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
  load:boolean = true;

  ngOnInit(): void {

    setTimeout(() => {
      this.load = false;
    }, 2000);
  }

}
