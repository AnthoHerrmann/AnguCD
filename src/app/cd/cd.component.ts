import { Component, Input, OnInit } from '@angular/core';
import { CD } from '../models/cd.model';
import { CDsService } from '../services/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CDComponent implements OnInit {

  @Input() Cd! : CD;
  theCd!: CD;
  idcd!: string;

  constructor(private cdService: CDsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idcd = this.route.snapshot.params['id'];
    if (this.idcd !== undefined) {
      this.cdService.getCDById(+this.idcd).subscribe(cd => {this.theCd = cd});
    }
    else {
      this.theCd = this.Cd;
    }
  }

  onAddCD(): void {
    this.theCd.quantite ++;
  }
}
