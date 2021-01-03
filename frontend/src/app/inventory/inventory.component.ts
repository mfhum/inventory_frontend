import { Component, OnInit } from '@angular/core';
import { ProducthandlingService } from '../services/producthandling.service';
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
  products: Product[] = [
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

  handleStock(taskId: number, handling: string) {
    //handling for rem and add
    if (handling === 'rem') {
      this.productService.remove(taskId).subscribe(data => {
        console.log(data);
      });
    } else {
      this.productService.add(taskId).subscribe(data => {
        console.log(data);
      });
    }
  }
  constructor(private productService: ProducthandlingService) {}

  ngOnInit() {
    //load in response
  }
}
