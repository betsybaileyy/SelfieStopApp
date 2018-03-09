import * as baseService from './base';

function all() {
    return baseService.get(`/api/images/`);
}

function one(id) {
    return baseService.get(`/api/images/${id}`);
}

function insert(data) {
    return baseService.postForm('/api/images', data);
}

export { one, insert, all };