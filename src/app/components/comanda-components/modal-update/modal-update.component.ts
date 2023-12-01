import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent {

  constructor(private modalService:NgbModal, private eventService:EventsService){}
  @Input() idItem:number|string=""
  @Input() idPedido:number|string=""
  @Input() item:string=""
  @Input() quantidade:number|string=""
  @Input() observacao:string=""
  @Input() valor:number|string = ""
  valorTotal:number = 0;

  onSubmitUpdate(){
    if (typeof this.idPedido === "string") {
      const parsedPedido = parseInt(this.idPedido, 10); // O segundo argumento é a base (radix) para a conversão
      
      if ( !isNaN(parsedPedido)) {
        this.idPedido = parsedPedido
            // Lidar com a resposta bem-sucedida do servidor (usuário logado)
            this.close();
            setTimeout(() => {
              this.eventService.emitMsgPedido(true, "Pedido Atualizado com Sucesso");
            }, 300);
            // Redirecionar ou fazer outras ações necessárias após o login
      }
    }
  }

add(): void {
  this.quantidade = this.converterParaNumero(this.quantidade) + 1;
  this.calcularValorTotal();
}

diminuir(): void {
  this.quantidade = this.converterParaNumero(this.quantidade);
  if (this.quantidade > 1) {
    this.quantidade -= 1;
    this.calcularValorTotal();
  }
}

calcularValorTotal():void{
  this.valor = typeof this.valor === 'string' ? parseFloat(this.valor) : this.valor as number; // convertendo string para number
  this.quantidade = typeof this.quantidade === 'string' ? parseFloat(this.quantidade) : this.quantidade as number; // convertendo string para number

  if (!isNaN(this.valor)) {
    this.valorTotal = this.valor * this.quantidade;
    this.valorTotal = parseFloat(this.valorTotal.toFixed(2)); // Limitando para duas casas decimais
  } else {
    console.error('O valor não pode ser convertido para número.');
    this.valorTotal = 0;
  }
}

private converterParaNumero(valor: number | string): number {
  return typeof valor === 'string' ? parseFloat(valor) : Number(valor);
}

  close() {
    this.modalService.dismissAll();
  }
}
