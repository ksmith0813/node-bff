
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
    todos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;
    movies(search?: Nullable<string>): Nullable<Search> | Promise<Nullable<Search>>;
    movie(imdbId?: Nullable<string>): Nullable<MovieDetail> | Promise<Nullable<MovieDetail>>;
    products(category?: Nullable<string>): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
    categories(): Nullable<Nullable<string>[]> | Promise<Nullable<Nullable<string>[]>>;
    users(): Nullable<Result> | Promise<Nullable<Result>>;
    weather(search?: Nullable<string>): Nullable<Weather> | Promise<Nullable<Weather>>;
}

export interface Todo {
    id?: Nullable<string>;
    userId?: Nullable<string>;
    title?: Nullable<string>;
    completed?: Nullable<boolean>;
}

export interface Movie {
    imdbID?: Nullable<string>;
    Poster?: Nullable<string>;
    Title?: Nullable<string>;
    Type?: Nullable<string>;
    Year?: Nullable<string>;
}

export interface Rating {
    Source?: Nullable<string>;
    Value?: Nullable<string>;
}

export interface MovieDetail {
    imdbRating?: Nullable<string>;
    imdbVotes?: Nullable<string>;
    Actors?: Nullable<string>;
    Awards?: Nullable<string>;
    BoxOffice?: Nullable<string>;
    Country?: Nullable<string>;
    DVD?: Nullable<string>;
    Director?: Nullable<string>;
    Genre?: Nullable<string>;
    Language?: Nullable<string>;
    Metascore?: Nullable<string>;
    Plot?: Nullable<string>;
    Poster?: Nullable<string>;
    Production?: Nullable<string>;
    Rated?: Nullable<string>;
    Ratings?: Nullable<Nullable<Rating>[]>;
    Released?: Nullable<string>;
    Runtime?: Nullable<string>;
    Title?: Nullable<string>;
    Type?: Nullable<string>;
    Writer?: Nullable<string>;
    Year?: Nullable<string>;
}

export interface Search {
    Search?: Nullable<Nullable<Movie>[]>;
}

export interface Product {
    id?: Nullable<string>;
    title?: Nullable<string>;
    price?: Nullable<number>;
    category?: Nullable<string>;
    description?: Nullable<string>;
    image?: Nullable<string>;
}

export interface UserId {
    value?: Nullable<string>;
}

export interface Name {
    first?: Nullable<string>;
    last?: Nullable<string>;
}

export interface Picture {
    large?: Nullable<string>;
    medium?: Nullable<string>;
    thumbnail?: Nullable<string>;
}

export interface Street {
    number?: Nullable<string>;
    name?: Nullable<string>;
}

export interface Coordinates {
    latitude?: Nullable<string>;
    longitude?: Nullable<string>;
}

export interface Timezone {
    offset?: Nullable<string>;
    description?: Nullable<string>;
}

export interface Location {
    street?: Nullable<Street>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    country?: Nullable<string>;
    postcode?: Nullable<string>;
    coordinates?: Nullable<Coordinates>;
    timezone?: Nullable<Timezone>;
    name?: Nullable<string>;
    region?: Nullable<string>;
    lat?: Nullable<string>;
    lon?: Nullable<string>;
    localtime?: Nullable<string>;
    tz_id?: Nullable<string>;
}

export interface DateOfBirth {
    date?: Nullable<string>;
    age?: Nullable<number>;
}

export interface Registered {
    date?: Nullable<string>;
    age?: Nullable<number>;
}

export interface User {
    id?: Nullable<UserId>;
    name?: Nullable<Name>;
    email?: Nullable<string>;
    picture?: Nullable<Picture>;
    location?: Nullable<Location>;
    dob?: Nullable<DateOfBirth>;
    registered?: Nullable<Registered>;
    phone?: Nullable<string>;
    cell?: Nullable<string>;
    nat?: Nullable<string>;
}

export interface Result {
    results?: Nullable<Nullable<User>[]>;
}

export interface Condition {
    text?: Nullable<string>;
    icon?: Nullable<string>;
}

export interface Current {
    temp_f?: Nullable<string>;
    temp_c?: Nullable<string>;
    feelslike_f?: Nullable<string>;
    feelslike_c?: Nullable<string>;
    condition?: Nullable<Condition>;
    humidity?: Nullable<number>;
    cloud?: Nullable<string>;
    wind_mph?: Nullable<string>;
    wind_dir?: Nullable<string>;
}

export interface Astro {
    sunrise?: Nullable<string>;
    sunset?: Nullable<string>;
    moon_phase?: Nullable<string>;
}

export interface ForecastHour {
    condition?: Nullable<Condition>;
    temp_c?: Nullable<number>;
    temp_f?: Nullable<number>;
    time_epoch?: Nullable<number>;
    time?: Nullable<string>;
}

export interface ForecastDay {
    astro?: Nullable<Astro>;
    date?: Nullable<string>;
    hour?: Nullable<Nullable<ForecastHour>[]>;
}

export interface Forecast {
    forecastday?: Nullable<Nullable<ForecastDay>[]>;
}

export interface Weather {
    location?: Nullable<Location>;
    current?: Nullable<Current>;
    forecast?: Nullable<Forecast>;
}

type Nullable<T> = T | null;
