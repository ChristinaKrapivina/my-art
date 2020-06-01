import { Component, OnInit } from '@angular/core';

import { movements } from '../../movements';
import { Movement } from 'src/interfaces';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {
  movements: Movement[] = movements;
  constructor() { }

  ngOnInit(): void {
  }

}
