import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [];
  selectedProductId: number | null = null;
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      // Add other form controls as needed
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(): void {
    this.productService.getAllProducts()
      .subscribe(
        products => {
          this.products = products;
        },
        error => {
          this.toastr.error('Failed to load products.');
        }
      );
  }

  addProduct(): void {
    const product: Product = {
      name: this.productForm.value.name,
      // Set other product properties from the form controls
    };
    this.productService.addProduct(product)
      .subscribe(
        newProduct => {
          this.products.push(newProduct);
          this.toastr.success('Product added successfully.');
          this.resetForm();
        },
        error => {
          this.toastr.error('Failed to add product.');
        }
      );
  }

  updateProduct(): void {
    if (!this.selectedProductId) {
      return;
    }

    const product: Product = {
      id: this.selectedProductId,
      name: this.productForm.value.name,
      // Set other product properties from the form controls
    };

    this.productService.updateProduct(product)
      .subscribe(
        updatedProduct => {
          const index = this.products.findIndex(p => p.id === updatedProduct.id);
          if (index >= 0) {
            this.products[index] = updatedProduct;
            this.toastr.success('Product updated successfully.');
            this.resetForm();
          }
        },
        error => {
          this.toastr.error('Failed to update product.');
        }
      );
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id)
        .subscribe(
          () => {
            this.products = this.products.filter(p => p.id !== id);
            this.toastr.success('Product deleted successfully.');
          },
          error => {
            this.toastr.error('Failed to delete product.');
          }
          );
    }
  }

  selectProduct(id: number): void {
    this.selectedProductId = id;
    const product = this.products.find(p => p.id === id);
    if (product) {
      this.productForm.patchValue({
        name: product.name,
        // Patch other form controls with product properties
      });
    }
  }

  resetForm(): void {
    this.selectedProductId = null;
    this.productForm.reset();
  }
}


