import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-model-pedido',
  templateUrl: './model-pedido.component.html',
  styleUrls: ['./model-pedido.component.css']
})
export class ModelPedidoComponent {
  
  item:string="X-TUDO";
  imagem:string="hamburguer.jpg";
  quantidade:number = 1;
  valor:number = 28.9;
  observacoes:string = "";

  constructor(){}
}
