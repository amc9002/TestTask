'use strict';

class Controller {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.handlers = {
            'SelectImage': (id) => this.editImage(id),
        };
    }

    showAll() {
        const data = this.model.read();
        this.view.showImages(data, this.handlers);
    }

    editImage(id) {
        const item = this.model.read(id);
        if (item) {
            this.view.editImage(item, this.handlers);
        }
    }
}
