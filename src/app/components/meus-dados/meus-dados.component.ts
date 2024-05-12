import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service';
import jsQR from 'jsqr';
import { MesaService } from 'src/app/services/mesa.service';
import { MesaData } from 'src/app/Models/mesaData';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {

  constructor(public mesaService:MesaService,private modalService:NgbModal){}
  @ViewChild('videoElement') videoElement!: ElementRef;
  cpf:string = ''
  nome:string = ''
  telefone:string=''
  mesaNum:number=0
  mesaGarcom:string=''

  mostrarErro: boolean = false;
  erro:string = "";
  alert:string = "";
  icon:string = "";

  ngOnInit(): void {
    this.recuperarUser();
  }
  close() {
    this.modalService.dismissAll();
    this.mostrarErro = false;
    this.mesaService.alterarMesa = false;
    this.mesaService.camera = false;
  }
  recuperarUser(){
      this.cpf = "12345678910"
      this.nome = "Cristiano Ronaldinho"
      this.telefone = "61993365414"
      this.mesaNum = 10
      this.mesaGarcom = "Messi Jr"
  }


  mostrarMsg(mensagem:string, tipo:number):void{
    if(tipo == 1){
      this.alert = "success"
      this.erro = mensagem
      this.icon = "bi bi-bookmark-checkl";
    }else if( tipo == 2){
      this.alert = "warning"
      this.erro = mensagem
      this.icon = "bi bi-exclamation-triangle-fill";
      setTimeout(() => {
        this.mostrarErro = false;
      }, 20000);
    }
      this.mostrarErro = true;
  }

  fecharMsg(){
    this.mostrarErro = false;
  }
}
