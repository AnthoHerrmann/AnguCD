import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CD } from '../models/cd.model';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {

    formulaire!: FormGroup;
    currentCD!: CD;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
      this.formulaire = this.formBuilder.group({
        title: [null],
        author: [null],
        price: [null],
        thumbail: [null],
        dateDeSortie: [null],
        quantite: [null],
      });

      this.formulaire.valueChanges.subscribe((formValue) => {
        this.currentCD = {
          id: 0,
          title: formValue.title,
          author: formValue.author,
          price: formValue.price,
          thumbnail: formValue.thumbail,
          dateDeSortie: formValue.dateDeSortie,
          quantite: formValue.quantite,
          onSale: false
        };
      });
    }

    soumissionForm(): void {

    }
}
