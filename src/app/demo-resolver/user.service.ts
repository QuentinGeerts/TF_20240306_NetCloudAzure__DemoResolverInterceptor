import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    { id: 1, nom: 'Geerts', prenom: 'Quentin' },
    { id: 2, nom: 'Person', prenom: 'Michael' },
    { id: 3, nom: 'Legrain', prenom: 'Samuel' },
  ]
    
  constructor() { }

  getUserById ( id: number ) {
    return this.users.find(u => u.id === id);
  }
  
}
