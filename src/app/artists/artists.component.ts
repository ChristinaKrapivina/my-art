import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  title: string = 'Choose Your Artist';

  constructor() { }

  ngOnInit(): void {
  }

}
