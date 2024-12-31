import { Component, Input, ViewChild } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { ProductCatalogComponent } from '../product-catalog/product-catalog.component';
import { Product } from 'src/app/Model/product';
import { LabwareActionsService } from 'src/app/Services/LabwareActionsService/labware-actions.service';

@Component({
  selector: 'x-shell',
  templateUrl: './shell.component.html',
  standalone: false,
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  expId: number = 123456;
  expName: string = 'Cell Splitting';
  expType: string = 'Protocol';
  userName: string = 'Hanan Tokash';

  @Input() data = 'No Results Found'
  display: boolean = false;
  labwareDockPosition = 'left';
  
  expModeOptions: any[] = [{ label: 'Edit', value: 'Edit' }, { label: 'View', value: 'View' }];
  actions: MenuItem[] = [];
  stepsAccordionItems: MenuItem[]= [];
  expMode: string = 'Edit';
  
  sidebarVisible: boolean = true;
  smartCanvasVisible: boolean = true;
  productCatalogVisible: boolean = false;

  activeStep: number = 0;

  products: Product[] = [];
  selectedProducts: Product | undefined;
  isProductFilter: boolean = false;
  isLabware: boolean = false;
  @ViewChild(ProductCatalogComponent) productCatalog!: ProductCatalogComponent;
  labwareActionsService: LabwareActionsService = new LabwareActionsService();

  positionOptions = [
    {
      label: 'Bottom',
      value: 'bottom'
    },
    {
      label: 'Top',
      value: 'top'
    },
    {
      label: 'Left',
      value: 'left'
    },
    {
      label: 'Right',
      value: 'right'
    }
  ];

  leftMegaMenuItems: MegaMenuItem[] | undefined;
  rightMegaMenuItems: MegaMenuItem[] | undefined;

  editModeLeftSideBarItems: MenuItem[] | undefined;
  viewModeLeftSideBarItems: MenuItem[] | undefined;

  leftSideBarItems: MenuItem[] | undefined;

  stepsItems: MenuItem[] = [];

  ngOnInit() {  
    this.rightMegaMenuItems = [
      {
        icon: 'pi pi-home x-megamenu-icon'
      },
      {
        icon: 'pi pi-shopping-cart x-megamenu-icon'
      },
      {
        icon: 'pi pi-download x-megamenu-icon'
      },
      {
        icon: 'pi pi-ellipsis-v x-megamenu-icon'
      }

    ]
    
    this.stepsItems = this.stepsItems = [...this.stepsItems, { title: 'Step 1' }]; 
    this.leftSideBarItems = this.editModeLeftSideBarItems;
    
  }

  getLeftSideBarItems(){
    return this.expMode != 'Edit' ? this.viewModeLeftSideBarItems : this.editModeLeftSideBarItems;
  }

  openProductCatalog(e?: Event){
    this.productCatalog.productCatalogVisible = true;
  }

  onMenuItemClick(command: string) {
    switch (command) {
      case 'openProductCatalog':
        this.openProductCatalog();    
        break;
    
      default:
        break;
    }
  }

  onProductCatalogClosed(){
    this.productCatalog.productCatalogVisible = false;
  }

  onProductIntroduced(introducedProduct: Product) {
    let productFound = this.products.find(x => x.code == introducedProduct.code)
    if (productFound) {
      if (!productFound.intQty) {
        productFound.intQty = 0;
      }
      productFound.intQty = productFound.intQty + 1;
    }
    else {
      this.products = [...this.products, introducedProduct];
    }

    if (this.products.length > 0) {
      this.isLabware = true;
    }
    else{
      this.isLabware = false;
    }

    if (this.products.length > 5) {
      this.isProductFilter = true;
    }
    else{
      this.isProductFilter = false;
    }
  }

  onProductUnintroduced(unintroducedProduct: Product) {
    unintroducedProduct.intQty = 0;
    let prodIdx = this.products.findIndex(x => x.code = unintroducedProduct.code) 
    this.products.splice(prodIdx, 1);
    this.products = [...this.products];

    if (this.products.length > 0) {
      this.isLabware = true;
    }
    else{
      this.isLabware = false;
    }

    if (this.products.length > 5) {
      this.isProductFilter = true;
    }
    else{
      this.isProductFilter = false;
    }
  }

  onNextStep() {
    const currStep = this.stepsItems.length + 1;
    const newItem: MenuItem = { label: `Step ${currStep}`, title: `Step ${currStep}` }
    this.stepsItems = [...this.stepsItems, newItem];
  } 

  onRightClick(event: any, menu: any) {
    event.preventDefault(); // Prevent the default browser context menu
    event.stopPropagation(); // Prevent the event from propagating further

    // Get the clicked item by calculating its index
    const listboxElement = event.target as HTMLElement;
    const parentList = listboxElement.closest('.p-listbox-list');
    const childElements = Array.from(parentList?.children || []);
    const index = childElements.indexOf(listboxElement.closest('.p-listbox-item')!);
    let selectedProduct = this.products[index];
      
    this.getActions(selectedProduct);
    
    menu.toggle(event); // Display menu at the cursor
  }

  getActions(selectedProduct: Product): void {
    this.actions = this.labwareActionsService.getActions(selectedProduct, this.products);
  }
}
