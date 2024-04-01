import { Component, OnInit } from '@angular/core';
import { CategoriaData } from 'src/app/Models/CategoriaData';
import { CategoriaServiceService } from 'src/app/services/categoria-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private categoriaService:CategoriaServiceService){}
  data: CategoriaData[] = [];

  ngOnInit(): void {
    this.data = [
      {
      id:1,
      categoria: "Ofertas"
      },
      {
        id:2,
        categoria: "Acompanhamentos"
        },
        {
          id:3,
          categoria: "Bebidas"
          },
          {
            id:4,
            categoria: "Massas"
            },
            {
              id:5,
              categoria: "Sobremesas"
              },      
    ]
    this.categoriaSelecionada(1);
    this.activateCategory(this.data[0]);
  }
 

  activateCategory(categoria: CategoriaData): void {
    this.data.forEach((cat) => {
      cat.active = false; // Desativa todas as categorias
    });
    categoria.active = true; // Ativa a categoria clicada
    this.categoriaSelecionada(categoria.id);
  }

  categoriaSelecionada(categoriaId: number): void {
    this.categoriaService.setCategoriaSelecionada(categoriaId);
  }
}
