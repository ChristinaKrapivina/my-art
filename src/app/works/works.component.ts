import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { works } from '../_tempDB/works';
import { Work } from 'src/interfaces';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  listOfWork: Work[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let work = works[+params.get('worksId')];
      this.listOfWork = work.paintings;
    });
  }

}
