import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu-perfil',
  templateUrl: './menu-perfil.component.html',
  styleUrls: ['./menu-perfil.component.css']
})
export class MenuPerfilComponent {
perfil:number=1

constructor(private modalService:NgbModal){ }
ngOnInit(): void {
// this.verificarUsuario();
}

openVerticallyCentered(content: TemplateRef<any>) {
  this.modalService.open(content, {size:'lg',centered: true,windowClass:'custom'});
}
}
