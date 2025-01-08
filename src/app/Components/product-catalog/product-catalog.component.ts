import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from 'primeng/table';
import { Product } from 'src/app/Model/product';
import { ProductCatalogService } from 'src/app/Services/ProductCatalogService/product-catalog.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'x-product-catalog',
  templateUrl: './product-catalog.component.html',
  standalone: false,
  styleUrls: ['./product-catalog.component.scss']
})

export class ProductCatalogComponent {

  products!: Product[];
  cols!: Column[];
  searchValue: string | undefined;

  @Input() productCatalogVisible: boolean = true;
  @Input() productsIntroduced: Product[] = [];

  @Output() productCatalogClosed = new EventEmitter<void>();
  @Output() productIntroduced = new EventEmitter<Product>();
  @Output() productUnintroduced = new EventEmitter<Product>();

  constructor(private productCatalogService: ProductCatalogService){ }

  ngOnInit() {
    this.productCatalogService.getProducts().then((products) => {
      this.products = products;
        this.products.forEach(p => {
          p.getProductActions();
        });
    });
  }

  onDialogClose(e: Event): void{
    this.productCatalogVisible = false;
  }

  handleDialogClose() {
    this.productCatalogClosed.emit(); // Notify that the dialog is closed
  }

  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
          return 'success';
    }
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }

  introduceItem(product: Product){
    product.isIntroduced = true;
    this.productIntroduced.emit(product);
  }

  unintroduceItem(product: Product){
    if (product.qtySelected && product.qtySelected == 1) {
      product.isIntroduced = false;  
    }
    
    this.productUnintroduced.emit(product);
  }
}
