export interface Product {
    id: string;
    name: string;
    image: string;
    artist: string;
    rating: number;
    rent: string;
    rent_type: string;
    buy: string;
    category: string;
    category_groups: string;
    size: string;
    original: string;
    material: string;
    avl_rent: string;
    avl_purchase: string;
    framed: string;
    description: string;
    price: number;
    brand: string;
    color: string;
    stock: number;
    features: number;
}
export interface Item {
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
