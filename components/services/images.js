import * as baseService from './base';

function all() {
    return baseService.get(`/api/images/`);
}

function allImages(id) {
    return baseService.get(`/api/images/${id}/locationImages`);
}

function insert(data) {
    return baseService.postForm('/api/images', data);
}

export { allImages, insert, all };