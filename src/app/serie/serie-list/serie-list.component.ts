import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];
  averageSeasons:number = 0;
  constructor(private serieService: SerieService) {}

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  calculateAverageSeasons(): number {
    var sum:number = 0;
    for (var serie of this.series) {
      sum += serie.seasons;
    }
    return sum/this.series.length;
  }

  ngOnInit() {
    this.getSeries();
    this.averageSeasons=this.calculateAverageSeasons()
  }
}
