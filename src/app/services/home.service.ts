import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Review {
    name: string;
    role: string;
    description: string;
    profileimg: string;
    bgimg: string;
    starcount: number;
}

export interface Art {
    name: string;
    bgimg: string;
}

export interface Faq {
    sno: string;
    question: string;
    answer: string;
}

export interface HomeData {
    reviews: Review[];
    arts: Art[];
    faqs: Faq[];
}

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private http: HttpClient) { }

    getHomeData(): Observable<HomeData> {
        return this.http.get<HomeData>('assets/home.json');
    }
}
