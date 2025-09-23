import { Component, OnInit } from '@angular/core';
import { FILMS } from '../../constans/films.constans';
import { Film } from '../../models/film.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Films } from '../../services/films';

@Component({
  selector: 'app-film-page',
  standalone: false,
  templateUrl: './film-page.html',
  styleUrl: './film-page.css'
})
export class FilmPage implements OnInit {
  public films: Film[] = []
  public film!: Film

  constructor (
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmsService: Films
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id')

    this.films = this._filmsService.getFullFilms

    this._initFilm(Number(id))
  }

  private _initFilm(id: number) {
    const findFilm = this.films.find(film => film.id === id)
    
    if(findFilm) {
      this.film = findFilm
    } else {
      this._router.navigate(['/'])
    }
  }
}
