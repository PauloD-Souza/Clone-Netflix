import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listTitle = [{
      trailer:'assets/videos/greys.mp4',
      cover:'assets/images/greys-anatomy.jpg',
      name: 'Greys Anatomy',
      relevance: '88',
      age:'18',
      categories:['Suspense','Ficção Cientifica']
    },{
      trailer:'assets/videos/capitao_america_guerra_civil_1080p.mp4',
      cover:'assets/images/capitao-america-o-primeiro-vingador.jpg',
      name: 'Capitão America',
      relevance: '95',
      age:'12',
      categories:['Ficção','Suspense']
    },{
      trailer:'assets/videos/homem_de_ferro_3_trailer_oficial_1080p.mp4',
      cover:'assets/images/homem-de-ferro.jpg',
      name: 'Homem de ferro',
      relevance: '90',
      age:'16',
      categories:['Ação','Aventura']
    }
  ]
}
