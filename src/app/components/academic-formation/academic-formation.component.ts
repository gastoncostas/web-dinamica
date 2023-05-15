import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-academic-formation',
  templateUrl: './academic-formation.component.html',
  styleUrls: ['./academic-formation.component.css'],
})
export class AcademicFormationComponent {
  miPortfolio: any;

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.miPortfolio = data;
    });
  }
}
