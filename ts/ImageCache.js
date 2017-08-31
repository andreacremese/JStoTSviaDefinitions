/**
 * Provides client-side caching of dynamically generated images.
 */
class ImageCache {
    constructor() {
        let configManager = getConfigManager();
        let cacheSize = configManager.getNumber(ConfigProperty.IMAGE_CACHE_SIZE);
        if (!cacheSize || cacheSize < ImageCache.MIN_CACHE_SIZE) {
            cacheSize = ImageCache.MIN_CACHE_SIZE;
        }
        this.cache = new LruCache(cacheSize);
    }
    putImage(imageInfo) {
        this.cache.set(imageInfo.cacheKey, imageInfo);
    }
    deleteImage(cacheKey) {
        this.cache.delete(cacheKey);
    }
    containsImage(cacheKey) {
        return this.cache.find(cacheKey);
    }
    getCachedImage(cacheKey) {
        return this.cache.get(cacheKey);
    }
}
ImageCache.MIN_CACHE_SIZE = 10;
//# sourceMappingURL=ImageCache.js.map