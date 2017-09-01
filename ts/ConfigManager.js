class ConfigManager {
    constructor() {
        this.settings = {};
    }
    setNumber(configProperty, value) {
        this.settings[configProperty.toLocaleString()] = value;
    }
    ;
    getNumber(configProperty) {
        return this.settings[configProperty.toLocaleString()];
    }
    ;
}
//# sourceMappingURL=ConfigManager.js.map