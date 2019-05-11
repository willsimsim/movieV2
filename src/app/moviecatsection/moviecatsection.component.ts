import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movieModel';

@Component({
  selector: 'app-moviecatsection',
  templateUrl: './moviecatsection.component.html',
  styleUrls: ['./moviecatsection.component.css']
})
export class MoviecatsectionComponent implements OnInit {

  @Input() name: string;
  @Input() movies: Array<Movie>;
  @Input() sectionTitle: string;


  constructor() { }

  ngOnInit() {
  }

}
