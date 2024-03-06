import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from './user.service';

export const userResolver: ResolveFn<any> = (route, state) => {
  
  const id = route.paramMap.get('id');
  return id ? inject(UserService).getUserById(+id) : null ;
};
