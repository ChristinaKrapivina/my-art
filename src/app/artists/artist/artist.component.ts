import { Component, OnInit } from '@angular/core';

import { artists } from '../../artists';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artists = artists;

  constructor() { }

  ngOnInit(): void {
  }

}
