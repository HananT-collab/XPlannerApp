import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product, stateOfMatter } from 'src/app/Model/product';

@Injectable({
  providedIn: 'root'
})
export class LabwareActionsService {

  constructor() { }

  actions: MenuItem[] = [];

  getActions(product: Product, introducedProducts: Product[]): MenuItem[] {
    if (product.isMaterial) {
      this.actions = this.getMaterialActions(product, introducedProducts);
    }
    else if (product.isVessel) {
      this.actions = this.getVesselActions(product, introducedProducts);
    }
    else if (product.isTool)
    {
      this.actions = this.getToolActions(product, introducedProducts);
    }
    else if (product.isDevice) {
      this.actions = this.getDeviceActions(product, introducedProducts);
    }
    return this.actions;
  }

  getMaterialActions(product: Product, introducedProducts: Product[]): MenuItem[] {
    let actions: MenuItem[] = this.getNoActions();
    switch (product.stateOfMatter) {
      case stateOfMatter.Liquid:
        let actionsForLiquid = this.getActionsForLiquid(introducedProducts);
        actions.push(actionsForLiquid);
        break;
      case stateOfMatter.Gas:
        break;
      case stateOfMatter.Plasma:
        break;
      case stateOfMatter.Solid:
        break;
      case stateOfMatter.Powder:
        break;
      default:
        break;
    }

    return actions;
  }

  getActionsForLiquid(products: Product[]): MenuItem[] {
    let actions: MenuItem[] = [];
    let action: MenuItem; 

    products.forEach(product => {
      if (product.isVessel) {
        action = {
          label: 'Pour into',
          Items: [
            {
              label: product.name
            }
          ]
        },
        actions.push(action);
      }
    });

    return actions
  }

  getVesselActions(product: Product, introducedProducts: Product[]): MenuItem[] {
    return [
      {
        label: 'Do with...',
        Items: [
          {
            label: 'There is no labware to interact with...'
          }
        ]
      },
      {
        label: 'Do on...',
        Items: [
          {
            label: 'There is no labware to interact with...'
          }
        ]
      }
    ]
  }

  getToolActions(product: Product, introducedProducts: Product[]): MenuItem[] {
    return [
      {
        label: 'Do with...',
        Items: [
          {
            label: 'There is no labware to interact with...'
          }
        ]
      },
      {
        label: 'Do on...',
        Items: [
          {
            label: 'There is no labware to interact with...'
          }
        ]
      }
    ]
  }

  getDeviceActions(product: Product, introducedProducts: Product[]): MenuItem[] {
    return [
      {
        label: 'Do with...',
        Items: [
          {
            label: 'There is no labware to interact with...'
          }
        ]
      },
      {
        label: 'Do on...',
        Items: [
          {
            label: 'There is no labware to interact with...'
          }
        ]
      }
    ]
  }

  getNoActions(): MenuItem[]{
    return [
      {
        label: 'Do with...',
        Items: [
          {
            label: 'There is no labware to interact with...'
          }
        ]
      },
      {
        label: 'Do on...',
        Items: [
          {
            label: 'There is no labware to interact with...'
          }
        ]
      }
    ]
  }
}

export enum LabActions {
  // Material handling
  Measure = "Measure",
  Weigh = "Weigh",
  Pipette = "Pipette",
  Mix = "Mix",
  Dilute = "Dilute",
  Transfer = "Transfer",
  Filter = "Filter",
  Centrifuge = "Centrifuge",

  // Vessel handling
  Label = "Label",
  Store = "Store",
  Seal = "Seal",
  Autoclave = "Autoclave",
  Clean = "Clean",

  // Tool/device operations
  Calibrate = "Calibrate",
  Operate = "Operate",
  Assemble = "Assemble",
  Disassemble = "Disassemble",
  Sterilize = "Sterilize",
  Dispose = "Dispose",
  Maintain = "Maintain",

  // Analysis and processing
  Analyze = "Analyze",
  Observe = "Observe",
  Record = "Record",
  Photograph = "Photograph",
  Stain = "Stain",
  Culture = "Culture",
  Test = "Test",
  Extract = "Extract"
}

export enum MaterialActions {
  // Actions for Solids
  Crush = "Crush",
  Weigh = "Weigh",
  Melt = "Melt",
  Freeze = "Freeze",
  Sublimate = "Sublimate",
  MixSolid = "Mix (Solid)",
  Cut = "Cut",
  Dry = "Dry",
  Press = "Press",

  // Actions for Powders (a subset of solids)
  Sift = "Sift",  // Separating particles by size or texture
  Dispense = "Dispense",  // Distribute a controlled amount of powder
  Spread = "Spread",  // Evenly distribute powder on a surface

  // Actions for Liquids
  MeasureLiquid = "Measure (Liquid)",
  MixLiquid = "Mix (Liquid)",
  Evaporate = "Evaporate",
  Distill = "Distill",
  Pipette = "Pipette",
  Dilute = "Dilute",
  Filtrate = "Filtrate",
  StoreLiquid = "Store (Liquid)",

  // Actions for Gases
  CollectGas = "Collect (Gas)",
  Compress = "Compress",
  Expand = "Expand",
  MeasureGas = "Measure (Gas)",
  InjectGas = "Inject (Gas)",
  Absorb = "Absorb",
  CoolGas = "Cool (Gas)",
  
  // Actions for Plasma
  Ionize = "Ionize",
  ContainPlasma = "Contain (Plasma)",
  HeatPlasma = "Heat (Plasma)",
  ControlPlasma = "Control (Plasma)",
  GeneratePlasma = "Generate (Plasma)",

  // General Actions
  StoreMaterial = "Store (Material)",
  LabelMaterial = "Label (Material)",
  ObserveMaterial = "Observe (Material)",
  TransferMaterial = "Transfer (Material)"
}
