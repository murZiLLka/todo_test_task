import uuid from 'uuid/v4';

export default class ItemObject {
    constructor(title, description = '') {
        this.title = title;
        this.description = description;
    }

    id = uuid();
    mode = 'normal';
    isDone = false;
};