import { Component, OnInit } from '@angular/core';
import { CD } from '../models/cd.model';
import { CDsService } from '../services/cds.service';

@Component({
  selector: 'app-list-cd',
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCDComponent implements OnInit {

  listCd! : CD[];

  constructor(private myCDsService: CDsService) {}

  ngOnInit(): void {
    this.myCDsService.getCDs().subscribe((cds) => this.listCd = cds);
  }
}
