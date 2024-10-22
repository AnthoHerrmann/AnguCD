import { Injectable } from '@angular/core';
import { CD } from '../models/cd.model';

@Injectable({
  providedIn: 'root'
})
export class CDsService {

  constructor() {}

  getCDs(): CD[] {
    
    return [
      {
        id : 1,
        title : 'The DarkSide of the Moon',
        author : 'Pink Floyd',
        price : 10,
        thumbnail : 'https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/musique/dossiers/albums-a-ecouter-absolument/the-dark-side-of-the-moon-des-pink-floyd-1973/83779787-1-fre-FR/The-Dark-Side-of-the-Moon-des-Pink-Floyd-1973.jpg',
        dateDeSortie : new Date (1973, 3, 1),
        quantite : 1
      },
      {
        id : 2,
        title : 'Pulse',
        author : 'Pink Floyd',
        price : 10,
        thumbnail : 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
        dateDeSortie : new Date (1974, 4, 11),
        quantite : 2,
        onSale : true
      },
      {
        id : 3,
        title : 'Time',
        author : 'Pink Floyd',
        price : 10,
        thumbnail : 'https://soundcloud.com/andrhttps://i1.sndcdn.com/artworks-X1JdoEKAKEHMival-6vN0jw-t500x500.jpgewiriarte/time-pink-floyd',
        dateDeSortie : new Date (1973, 1, 26),
        quantite : 0
      }
    ];
  }

  getCDById(id: number): CD {
    const cd = this.getCDs().find(cd => cd.id === id);
    if (cd) {
      return cd;
    } else {
      throw new Error('CD introuvable');
    }
  }
}
