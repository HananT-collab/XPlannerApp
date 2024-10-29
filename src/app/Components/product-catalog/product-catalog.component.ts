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
  styleUrls: ['./product-catalog.component.scss']
})

export class ProductCatalogComponent {

  products!: Product[];
  cols!: Column[];
  searchValue: string | undefined;

  @Input() productCatalogVisible: boolean = true;
  @Output() productCatalogClosed = new EventEmitter<void>();

  constructor(private productCatalogService: ProductCatalogService){ }

  ngOnInit() {
    this.productCatalogService.getProducts().then((data) => {
        this.products = data;
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
}
