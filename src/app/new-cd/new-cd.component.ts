import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CD } from '../models/cd.model';
import { CDsService } from '../services/cds.service';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {

  thumbnailRegex!: RegExp;
  formulaire!: FormGroup;
  currentCD!: CD;


  constructor(private cdService: CDsService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.thumbnailRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');

    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required]],
      author: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      thumbnail: [null, [Validators.required, Validators.pattern(this.thumbnailRegex)]],
      dateDeSortie: [null,[Validators.required]],
      quantite: [null, [Validators.required, Validators.min(0)]],
    });

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD = {
        title: formValue.title,
        author: formValue.author,
        price: formValue.price,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite,
      };
    });
  }

  soumissionForm(): void {
    this.cdService.addCD(this.currentCD);
  }
}
