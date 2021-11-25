import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Con esto no hay que importarlo de ningún modulo
                      // Simplemente se inyecta y ya lo tienen listo
})
export class SettingsService {

    //Seleccionamos el html con el DOM para cargar el tema de la pagina
    public linkTheme = document.querySelector('#theme')!;

  constructor() {
    console.log('Settings Service init');

        // Leemos el url del tema del escritorio del localStorage o si es null le damos un valor
        const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
        // reescribimos el url en el elemento con  el url del tema que hemos leido del localStorage
        this.linkTheme.setAttribute('href', url);

   }

   changeTheme(theme: string) { // Cambia el tema

      const url =`./assets/css/colors/${ theme }.css`;

      this.linkTheme.setAttribute('href', url);
      localStorage.setItem('theme', url); // guardamos en localStorage
      //console.log(url);
      this.checkCurrentTheme();
     
   }

   checkCurrentTheme(){ // Cambia el check que pintamos encima del boton

    const links = document.querySelectorAll('.selector');

    const currentTheme = this.linkTheme.getAttribute('href'); // Extraemos la URL del tema activo
    //Usa la propiedad links definida al principio de la clase de este componente
    // Para no tener que leer el DOM cada vez que se invoca a este método. Optimizamos procesos
    links.forEach( elem => { // Recorre todos los elementos html cuya clase es selector
      
      elem.classList.remove('working'); // Quita la clase working del elemento actual
      const btnTheme = elem.getAttribute('data-theme'); // Recoge la descripcion del boton
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`; // Reconstruimos url para comparar con la activa


      if ( btnThemeUrl === currentTheme) { // si el boton coincide con el tema activo
        elem.classList.add('working'); // Añade la clase working que muestra el check
      }
    });

    console.log(links);
  }



}
