import { SafeResourceUrl, SafeUrl } from "@angular/platform-browser";

export interface AuthI {
    id: string
}





export interface VeterinianVideoI {

    title: string;
    description: string;
    titleButton: string;
    urlVideo: string;
    safeUrl?: SafeResourceUrl
    type: number;

}


export interface DogCardI {
    type: number; //1-> Description methodology dog, 2-> buy a dog

    image: string;

    //type 1
    title?: string;
    description?: string;

    //type 2
    priceNow?: number;
    priceBefore?: number;
}

export interface VeterinaryI {
    name: string;
    career: string;
    image: string;
}

export interface VeterinaryNewsI {
    title: string;
    date: string;
    description: string;
    extraInfo: string;
    image: string;
}

export interface GenericDetailI {
    title: string;
    description: string;
    typeColor: number;

    type: number; // 1-> Dogs, 2-> veterinaries, 3-> Veterinaries news
    listDog?: DogCardI[];
    listVeterinaries?: VeterinaryI[];
    listVetrinaryNews?: VeterinaryNewsI[];
}

export interface IdkI {
    DocEntry: number;
    DocNum: number;
    CardCode: string;
    CardName: string;
    GroupCode: number;
    GroupName: string;
    SlpCode: number;
    SlpName: string;
    ItemCode: string;
    ItemName: string;
    FirmCode: number;
    FirmName: string;
    CategoriaCode?: any;
    CategoriaName: any;
    Subgrupo: string;
    UEN: string;
    Quantity: number;
    OpenQty: number;
    LineTotal: number;
    WhsCode: string;
    PRODUCCION: number;
    TRANSITO: number;
    CANAL: string;
}


export interface LevelKeyI {
    key: string;
    name: string;
}

export interface ModelHeaderTableI{
    name:string;
    displayed:string;
    isName?:Boolean;
}

export interface ProcedureDataI {

    keyType: string;
    type: string;
    
    produccion: number;
    transito: number;
    openQty: number;
    quantity: number;

    nameType:string;

    data?: ProcedureDataI[];
    dict?: Map<string, ProcedureDataI>;
    isExpanded?:Boolean;

}