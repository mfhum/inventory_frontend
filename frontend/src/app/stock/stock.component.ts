import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../models/product';
import { StockhandlingService } from '../services/stockhandling.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  createProductForm: FormGroup;

  createTask() {
    if (this.createProductForm.valid) {
      let product: Product = new Product();
      product.name = this.name.value;
      product.amount = this.amount.value;
      product.type = this.type.value;
      product.desc = this.desc.value;

      this.stockService.create(product).subscribe(
        data => {
          console.log(data);
          this.createProductForm.reset();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log(this.createProductForm);
    }
  }

  constructor(
    private fb: FormBuilder,
    private stockService: StockhandlingService
  ) {}

  ngOnInit() {
    this.createProductForm = this.fb.group({
      name: [
        '',
        [
          Validators.pattern('[a-zA-Z]*'),
          Validators.maxLength(20),
          Validators.required
        ]
      ],
      amount: ['', [Validators.pattern('[0-9]*'), Validators.required]],
      type: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }

  get name(): FormControl {
    return this.createProductForm.get('name') as FormControl;
  }

  get amount(): FormControl {
    return this.createProductForm.get('amount') as FormControl;
  }

  get type(): FormControl {
    return this.createProductForm.get('type') as FormControl;
  }

  get desc(): FormControl {
    return this.createProductForm.get('desc') as FormControl;
  }
}
