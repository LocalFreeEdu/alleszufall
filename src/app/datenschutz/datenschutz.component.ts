import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  standalone: false,
  selector: 'app-datenschutz',
  templateUrl: './datenschutz.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./datenschutz.component.scss']
})
export class DatenschutzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
