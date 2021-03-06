import SAPModel from "sap/a/model/Model";

export default class Model extends SAPModel {
    constructor(...args) {
        super({
            selectedPoi: null,
            queryPoi: null,
            odPoi: null
        });
    }

    init() {
        super.init();
    }

}
