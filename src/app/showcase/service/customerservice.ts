import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../domain/customer';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) {}

    getCustomersMini() {
        return this.http
            .get<any>('assets/showcase/data/customers-small.json')
            .toPromise()
            .then((res) => <Customer[]>res.data.slice(0, 5))
            .then((data) => {
                return data;
            });
    }

    getCustomersSmall() {
        return this.http
            .get<any>('assets/showcase/data/customers-small.json')
            .toPromise()
            .then((res) => <Customer[]>res.data)
            .then((data) => {
                return data;
            });
    }

    getCustomersMedium() {
        return this.http
            .get<any>('assets/showcase/data/customers-medium.json')
            .toPromise()
            .then((res) => <Customer[]>res.data)
            .then((data) => {
                return data;
            });
    }

    getCustomersLarge() {
        return this.http
            .get<any>('assets/showcase/data/customers-large.json')
            .toPromise()
            .then((res) => <Customer[]>res.data)
            .then((data) => {
                return data;
            });
    }

    getCustomersXLarge() {
        return this.http
            .get<any>('assets/showcase/data/customers-xlarge.json')
            .toPromise()
            .then((res) => <Customer[]>res.data)
            .then((data) => {
                return data;
            });
    }

    getCustomers(params?: any) {
        return this.http.get<any>(environment.apiUrl, { params: params }).toPromise();
    }
}
