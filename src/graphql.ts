
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Brewery {
    id?: Nullable<string>;
    name?: Nullable<string>;
    brewery_type?: Nullable<string>;
    street?: Nullable<string>;
    address_2?: Nullable<string>;
    address_3?: Nullable<string>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    county_province?: Nullable<string>;
    postal_code?: Nullable<string>;
    country?: Nullable<string>;
    longitude?: Nullable<string>;
    latitude?: Nullable<string>;
    phone?: Nullable<string>;
    website_url?: Nullable<string>;
    updated_at?: Nullable<string>;
    created_at?: Nullable<string>;
}

export interface IQuery {
    breweries(): Nullable<Nullable<Brewery>[]> | Promise<Nullable<Nullable<Brewery>[]>>;
    health(): string | Promise<string>;
    version(): string | Promise<string>;
}

type Nullable<T> = T | null;
