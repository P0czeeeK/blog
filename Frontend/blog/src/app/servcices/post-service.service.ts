import { Injectable } from '@angular/core';
import { Post } from '../models/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private kluczPrzechowalni = 'zadania';

  zwrocPosty(): Post[]{
    const zapisaneZadania =
   sessionStorage.getItem(this.kluczPrzechowalni);
    return zapisaneZadania ?
   JSON.parse(zapisaneZadania) : [];
  }

   
   

}
