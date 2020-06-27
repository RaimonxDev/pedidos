import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { filter, sortedUniq,map, keyBy } from 'lodash-es';
import { Productos } from "../../services/Productos";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos: Productos[]= this.data.getProductos();
  marcas: string[]= [];
  panelOpenState = false;
  productoOrdenados = []
  forma: FormGroup

  constructor(private data: DataService)
  {
    this.getProductosPorMarca()
    console.log(this.productoOrdenados);
  }

  ngOnInit(): void {}

  getMarcas() {
      let allMarcas = map(this.productos, "MARCA")
      this.marcas = sortedUniq(allMarcas)
      return this.marcas;
  }

  getProductosPorMarca(){

    let marcas = this.getMarcas()

    marcas.forEach(marca => {

      let items = filter(this.productos,{"MARCA": marca})

      this.productoOrdenados.push({"marca": marca, "items": items})

    })





    // //  this.productos = this.data.getProductos()
    //  console.log(items);
    //  return items
  }

  guardar(event){
    console.log(event);
  }

}
