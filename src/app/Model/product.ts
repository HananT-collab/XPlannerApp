export interface Product {
    id?: string;
    code?: string;
    name?: string;
    shortDescription?: string,
    description?: string;
    image?: string;
    price?: string;
    quantity?: string;
    intQty?: number;
    category?: string;
    model?: string;
    electricalRequirements?: string;
    isDevice?: boolean;
    isTool?: boolean;
    isMaterial?: boolean;
    isVessel?: boolean;
    isIntroduced?: boolean;
    stateOfMatter?: stateOfMatter
}


export enum stateOfMatter {
  Liquid,
  Solid,
  Gas,
  Plasma,
  Powder
}


// id: 'T2605',
// code: 'T2605',
// name: 'StableCell™ Trypsin Solution',
// shortDescription: 'Trypsin-EDTA solution',
// description: '5X, sterile-filtered, BioReagent, suitable for cell culture, 2.5 g porcine trypsin and 0.2 g EDTA, 4Na per liter of Hanks′ Balanced Salt Solution with phenol red',
// image: '/deepweb/assets/sigmaaldrich/product/images/330/948/c793511e-7558-4379-be7a-ce53a43a2a7d/640/c793511e-7558-4379-be7a-ce53a43a2a7d.jpg',
// price: '108$',
// category: 'Bioprocessing Liquid Cell Culture Media & Buffers',
// quantity: '100ML'
 