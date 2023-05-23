import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cap06';
  //il costruttoreinizzializza proprieta e metodi

  avanzamento: number = 0;
  aumento: number = 20;

  constructor() {

   
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.avanzamento + this.aumento < 100) {
        this.avanzamento += this.aumento;
      } else {
        this.avanzamento = 100;
      }
    }, 1200);

    // AGGIORNAMENTO AUTOMATICO ALL'INFINITO
    /*
     setInterval(() => {
      if (this.avanzamento + this.aumento <= 100) {
        this.avanzamento += this.aumento;
      } else {
        this.avanzamento = 0;
      }
    }, 1200);
  }
    */
  }
  
}
