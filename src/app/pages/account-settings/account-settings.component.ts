import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  // estas invocaciones al DOM están sacadas fuera de los métodos
  // para evitar la repetición de peticiones al DOM y optimiza tiempo de procesos
  
  

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void { //Entra cuando está la página cargada
    //Ahora que está la pagina cargada puede leer los elementos html
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settingsService.changeTheme( theme );
  }


}
