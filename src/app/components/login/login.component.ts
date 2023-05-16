import { Component, OnInit} from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService){ }

  ngOnInit(): void{ 
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio = data;
    });
  }
  
  username: string | undefined;
  password: string | undefined;

  login() {
    // Aquí agregaríamos la lógica de inicio de sesión. Por ejemplo, podríamos enviar una solicitud a un servidor para verificar las credenciales del usuario.

    console.log(`Iniciando sesión con el usuario ${this.username} y la contraseña ${this.password}.`);
  }

}


