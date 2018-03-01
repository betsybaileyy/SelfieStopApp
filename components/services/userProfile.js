import * as baseService from './base';

function all() {
    return baseService.get('/api/users/:id/selfies');
}

function one(id) {
    return baseService.get(`/api/users/${id}`);
}

export { all, one, insert, update, destroy };