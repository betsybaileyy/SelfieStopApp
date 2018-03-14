import * as baseService from './base';

function all(id) {
    return baseService.get(`/api/userProfile/${id}/selfies`);
}

function one(id) {
    return baseService.get(`/api/userProfile/${id}`);
}

function update(data) {
    return baseService.putForm(`/api/userProfile/`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/userProfile/${id}/selfies`);
}

export { all, one, update, destroy };
