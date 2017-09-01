/**
 * @typedef {object} ImageInfo
 * @property {string} id
 * @property {number} width
 * @property {number} height
 * @property {string} cacheKey
 * @property {string} dataUri
 */

/**
 * Provides client-side caching of dynamically generated images.
 * @class
 */
function ImageCache() {
    var cacheSize = getConfigManager().getNumber(ConfigProperty.IMAGE_CACHE_SIZE);
    if (!cacheSize || cacheSize < ImageCache.MIN_CACHE_SIZE) {
        console.log(">>>> no cache size");
        cacheSize = ImageCache.MIN_CACHE_SIZE;
    }

    this.cache = new LruCache(cacheSize);
}

ImageCache.prototype = {
    constructor: ImageCache
};

ImageCache.MIN_CACHE_SIZE = 10;

/**
 * @param {ImageInfo} imageInfo
 */
ImageCache.prototype.putImage = function(imageInfo) {
    this.cache.set(imageInfo.cacheKey, imageInfo);
};

/**
 * @param {string} cacheKey
 */
ImageCache.prototype.deleteImage = function(cacheKey) {
    this.cache.delete(cacheKey);
};

/**
 * @param {string} cacheKey
 */
ImageCache.prototype.containsImage = function(cacheKey) {
    return this.cache.find(cacheKey);
};

/**
 * @param {string} cacheKey
 * @returns {ImageInfo}
 */
ImageCache.prototype.getCachedImage = function(cacheKey) {
    return this.cache.get(cacheKey);
};
