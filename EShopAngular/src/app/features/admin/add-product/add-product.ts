import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from '../../../core/product';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css']
})
export class AddProduct implements OnInit {

  form!: FormGroup;

  

  constructor(private fb: FormBuilder, private products: ProductService) {}
  ngOnInit(): void {
    this.form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    category: [''],
    subCategory: [''],
    variation: [''],
    variationValue: [''],
    price: [0, [Validators.required, Validators.min(0)]],
    image: [''],
    sku: [''],
    status: ['active', Validators.required],
  });
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.value;
    this.products.addProduct({
      name: v.name!, description: v.description || '',
      category: v.category || '', subCategory: v.subCategory || '',
      price: v.price!, image: v.image || '', sku: v.sku || '',
      status: (v.status as 'active'|'inactive') || 'active'
    });
    this.form.reset({ price: 0, status: 'active' });
  }
}
