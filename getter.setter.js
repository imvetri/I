let store = { 
    set store(val) {
        console.log("SET")
        this._store = val;
    },
    get store() {
        console.log("GET");
        return this._store;
    }
};