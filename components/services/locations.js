import * as baseService from './base';

function all() {
    return baseService.get('/api/locations/:typeid/');
}

function one(id) {
    return baseService.get(`/api/locations/:typeid/${id}`);
}

export { all, one, insert, update, destroy };