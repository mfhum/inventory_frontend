import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  amount: number;
  id?: number;
  productType?: string;
  productDescription: string;
}
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  product: Product[] = [
    {
      name: 'Sprite',
      amount: 2,
      id: 3,
      productType: 'Drink',
      productDescription: 'A cool Drink'
    },
    {
      name: 'Coca Cola',
      amount: 4,
      id: 2,
      productType: 'Drink',
      productDescription: 'A cool Drink'
    },
    {
      name: 'Water',
      amount: 1,
      id: 1,
      productType: 'Drink',
      productDescription: 'A cool Drink'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
