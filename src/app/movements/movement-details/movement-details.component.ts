import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { movements } from '../../_tempDB/movements';
import { Movement } from 'src/interfaces';

@Component({
  selector: 'app-movement-details',
  templateUrl: './movement-details.component.html',
  styleUrls: ['./movement-details.component.scss']
})
export class MovementDetailsComponent implements OnInit {
  movement: Movement;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movement = movements[+params.get('movementID')];
    })
  }
}
