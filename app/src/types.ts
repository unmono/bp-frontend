export interface SubSubSectionType {
  title: string;
  path: string;
}

export interface ProductShortType {
  part_no: string;
  title_en: string;
  path: string;
}

export interface ProductType {
  title_ua: string;
  title_en: string;
  uktzed: number;
  min_order: number;
  quantity: number;
  price: number;
  truck: boolean;
  group: SubSubSectionType;
}

export interface MasterDataType {
  ean: number
  gross: number
  net: number
  weight_unit: string
  length: number
  width: number
  height: number
  measure_unit: string
  volume: number
  volume_unit: string
}

export interface PartType {
  part_no: string;
  discontinued: boolean;
  new_release: boolean;
  product?: ProductType;
  masterdata?: MasterDataType;
  refers: [ProductShortType];
}