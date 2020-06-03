import { Component, OnInit } from '@angular/core';

import { artists } from '../../_tempDB/artists';
import { Artist } from 'src/interfaces';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artists: Artist[] = artists;

  constructor() { }

  ngOnInit(): void {
  }

}
