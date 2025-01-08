import { Component, Input, ViewChild } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { ProductCatalogComponent } from '../product-catalog/product-catalog.component';
import { Product, productAction } from 'src/app/Model/product';
import { LabwareActionsService } from 'src/app/Services/LabwareActionsService/labware-actions.service';
import { ContextMenu } from 'primeng/contextmenu';
import { Action } from 'rxjs/internal/scheduler/Action';

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
  actions: productAction[] = [];
  selectedItemIndex: number = -1;
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
  @ViewChild('stepContextMenu') stepContextMenu!: ContextMenu;
  @ViewChild('labwareContextMenu') labwareContextMenu!: ContextMenu;
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

  targetStep!: HTMLElement | undefined;
  targetLabware!: HTMLElement | undefined;
  stepsItems: MenuItem[] = [];
  
  stepContextMenuItems = [
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => this.deleteItem(this.selectedItemIndex)
      }
  ];
  labwareContextMenuItems = [
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => this.deleteItem(this.selectedItemIndex)
    }
];

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
    if (!introducedProduct.qtySelected) {
      introducedProduct.qtySelected = 1;
    }

    if (productFound) {
      introducedProduct.qtySelected = introducedProduct.qtySelected + 1;
      return;
    }
    
    this.products = [...this.products, introducedProduct];
    this.products.length > 0 ? this.isLabware = true : this.isLabware = false;
    this.products.length > 5 ? this.isProductFilter = true : this.isProductFilter = false;
  }

  onProductUnintroduced(unintroducedProduct: Product) {

    if (unintroducedProduct.qtySelected && unintroducedProduct.qtySelected > 1) {
      unintroducedProduct.qtySelected = unintroducedProduct.qtySelected - 1;
      return;
    }

    let prodIdx = this.products.findIndex(x => x.code == unintroducedProduct.code) 
    this.products.splice(prodIdx, 1);
    this.products = [...this.products];
    this.products.length > 0 ? this.isLabware = true : this.isLabware = false;
    this.products.length > 5 ? this.isProductFilter = true : this.isProductFilter = false;
  }

  onNextStep() {
    const currStep = this.stepsItems.length + 1;
    const newItem: MenuItem = { label: `Step ${currStep}`, title: `Step ${currStep}` }
    this.stepsItems = [...this.stepsItems, newItem];
  }

  showStepContextMenu(event: MouseEvent, item: MenuItem, index: number) {
      this.selectedItemIndex = index;
      if (event.target) {
        this.targetStep = event.target as HTMLElement; // Store the target element  
      }
      this.stepContextMenu.show(event); // Show the context menu
      event.preventDefault(); // Prevent default context menu
  }

  showLabwareContextMenu(e: MouseEvent, selectedProduct: Product){
    e.preventDefault();
    this.targetLabware = e.target as HTMLElement;
    this.labwareContextMenu.show(e);
  }

  clearTargetStep() {
    this.targetStep = undefined; // Clear the target variable
  }

  clearTargetLabware() {
    this.targetLabware = undefined; // Clear the target variable
  }

  deleteItem(index: number) {
      if (index > -1) {
          this.stepsItems.splice(index, 1); // Remove item from array
      }
  }
}
