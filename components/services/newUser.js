import * as baseService from './base';

function insert(data) {
    return baseService.post('/api/auth/signup', data);
}


export { insert };