// class ConfigManager {
//
//     private settings : {[index : string] : number} = {};
//
//     public setNumber(configProperty : ConfigProperty, value : number) : void {
//         this.settings[configProperty] = value;
//     };
//
//     getNumber(configProperty : ConfigProperty) {
//         return this.settings[configProperty];
//     };
//
// }
//
//
// ConfigProperty = {
//     IMAGE_CACHE_SIZE: 100
// };
//
// var configManager : ConfigManager;
//
// function getConfigManager() : ConfigManager{
//     if (!configManager) {
//         configManager = new ConfigManager();
//         configManager.setNumber(ConfigProperty.IMAGE_CACHE_SIZE, 100);
//     }
//
//     return configManager;
// }
