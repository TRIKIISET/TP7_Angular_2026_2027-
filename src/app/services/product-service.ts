import { Service, signal } from '@angular/core';
import { Product } from '../models/product';

@Service()
export class ProductService {
    private _products = signal<Product[]>([
    { id: 'p32', name: 'trousse', price: 14.2, madeIn:'Tunisia' },
    { id: 'p47', name: 'stylo', price: 0.6, madeIn:'Tunisia' },
    { id: 'p51', name: 'cartable', price: 67.2, madeIn:'Algeria' },
    { id: 'p64', name: 'tablier', price: 24.8, madeIn:'China' },
])
readonly products = this._products.asReadonly();

getProductById(id:string):Product|undefined{
    return this._products().find(p=>p.id ==id);
}

}
