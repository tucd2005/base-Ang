import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private api: HttpClient) {}
  apiUrl: string = ``;
}
