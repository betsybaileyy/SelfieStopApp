import * as baseService from './base';

function one(id) {
    return baseService.get(`/api/images/${id}`);
}

function insert(data) {
    return baseService.postForm('/api/images', data);
}

export { one, insert };