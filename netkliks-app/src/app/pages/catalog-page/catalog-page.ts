import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constans/films.constans';
import { Films } from '../../services/films';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage {

  constructor (
    private _filmsService: Films
  ) {}

  public get films(): Film[] {
    return this._filmsService.filteredFilms
  }
}
