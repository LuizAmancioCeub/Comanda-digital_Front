import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabela-preparo',
  templateUrl: './tabela-preparo.component.html',
  styleUrls: ['./tabela-preparo.component.css']
})
export class TabelaPreparoComponent {
  constructor( private modalService:NgbModal){}

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true,windowClass:'custom' });
}
}
