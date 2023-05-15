import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})

export class LogosComponent {

  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService){ }

  ngOnInit(): void{ 
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio = data;
    });
  }

}
