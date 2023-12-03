import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabela-comanda',
  templateUrl: './tabela-comanda.component.html',
  styleUrls: ['./tabela-comanda.component.css']
})
export class TabelaComandaComponent {

  constructor(private modalService:NgbModal){}
  openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true})//,windowClass: 'custom-modal-comanda-item'});
	}

  close() {
    this.modalService.dismissAll();
  }
}
