import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options{
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Rooms {
    list: Room[]
}

export interface Room {
    uuid: string,
    number: number,
    roomType: string,
    pricePerNight: number,
    capacity: number,
    status: string,
    images: RoomImage[]
}

export interface RoomImage {
    uuid: string,
    publicId: string,
    url: string
}