import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {
  constructor(private modalService: NgbModal, private eventService:EventsService ){}
  
  @Input() idPedido:number|string = ""

  onSubmitDelete(){
    if (typeof this.idPedido === "string") {
      const parsedPedido = parseInt(this.idPedido, 10); // O segundo argumento é a base (radix) para a conversão
      
      if ( !isNaN(parsedPedido)) {
        this.idPedido = parsedPedido
            // Lidar com a resposta bem-sucedida do servidor (usuário logado)
            this.close();
            setTimeout(() => {
              this.eventService.emitMsgPedido(true, "Pedido Cancelado com Sucesso");
            }, 300);
            // Redirecionar ou fazer outras ações necessárias após o login
    }
  }
  }

  close() {
    this.modalService.dismissAll();
  }
}
