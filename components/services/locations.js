import * as baseService from './base';

function all(typeid) {
    return baseService.get(`/api/locations/${typeid}/`);
}

function one(typeid, id) {
    return baseService.get(`/api/locations/${typeid}/${id}`);
}

export { all, one }; //insert, update, destroy