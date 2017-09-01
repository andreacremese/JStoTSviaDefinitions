/**
 * @enum {number}
 */
ConfigProperty = {
    IMAGE_CACHE_SIZE: 100
};

/**
 * @class
 */
function ConfigManager() {
    this.settings = {};
}

/**
 * @param {ConfigProperty} configProperty
 * @param {number} value
 */
ConfigManager.prototype.setNumber = function(configProperty, value) {
    return this.settings[configProperty] = value;
};

/**
 * @param {ConfigProperty} configProperty
 * @returns {number}
 */
ConfigManager.prototype.getNumber = function(configProperty) {
    return this.settings[configProperty];
};

var configManager;

/**
 * @returns {ConfigManager}
 */
function getConfigManager() {
    if (!configManager) {
        configManager = new ConfigManager();
        configManager.setNumber(ConfigProperty.IMAGE_CACHE_SIZE, 100);
    }

    return configManager;
}
