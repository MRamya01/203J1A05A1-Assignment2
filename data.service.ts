import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  getItems(){
    return [{name:"Dog",des:"- Puppy"},{name:"Cat",des:"- kitten"},{name:"Lion",des:"- Cub"}];
  }
}
