import { Component, OnInit } from '@angular/core';
import { CategoriaServiceService } from 'src/app/services/categoria-service.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  constructor( private eventService:EventsService, private categoriaService:CategoriaServiceService){}

  msg:boolean = false
  txt:string = "";
  show:string=""
  categoria:number=0;
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
    
  this.categoriaService.categoriaSelecionada$.subscribe((categoriaId) => {
    if (categoriaId !== null) {
      this.categoria = categoriaId;
      this.loadItems(categoriaId);
    }
  });
  }
  ofertas:boolean = false;
  bebidas:boolean = false;
  acompanhamentos:boolean = false;
  massas:boolean = false;
  sobremesas:boolean = false;
  itens:boolean = true;
  loadItems(categoriaId: number): void {
    if(categoriaId == 1){
      this.ofertas = true;
      this.bebidas = false;
      this.massas = false;
      this.acompanhamentos = false;
      this.sobremesas = false;
    }else if(categoriaId == 2){
      this.acompanhamentos = true;
      this.bebidas = false;
      this.massas = false;
      this.ofertas = false;
      this.sobremesas = false;
    }else if(categoriaId == 3){
      this.bebidas = true;
      this.ofertas = false;
      this.massas = false;
      this.acompanhamentos = false;
      this.sobremesas = false;
    }else if(categoriaId == 4){
      this.massas = true;
      this.ofertas = false;
      this.bebidas = false;
      this.acompanhamentos = false;
      this.sobremesas = false;
    }else if(categoriaId == 5){
      this.sobremesas = true;
      this.bebidas = false;
      this.massas = false;
      this.acompanhamentos = false;
      this.ofertas = false;
      this.itens = false;
    }
  }


  

}
