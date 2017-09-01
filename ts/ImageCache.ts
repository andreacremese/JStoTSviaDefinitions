// interface ImageInfo {
//     id: string,
//     width: number,
//     height: number,
//     cacheKey: string,
//     dataUri: string
// }
//
// /**
//  * Provides client-side caching of dynamically generated images.
//  */
// class ImageCache {
//
//     public static readonly MIN_CACHE_SIZE: number = 10;
//
//     private cache: LruCache<string, ImageInfo>;
//
//     public constructor() {
//         let configManager = getConfigManager();
//
//         let cacheSize = configManager.getNumber(ConfigProperty.IMAGE_CACHE_SIZE);
//         if (!cacheSize || cacheSize < ImageCache.MIN_CACHE_SIZE) {
//             cacheSize = ImageCache.MIN_CACHE_SIZE;
//         }
//
//         this.cache = new LruCache<string, ImageInfo>(cacheSize);
//     }
//
//     public putImage(imageInfo: ImageInfo) {
//         this.cache.set(imageInfo.cacheKey, imageInfo);
//     }
//
//     public deleteImage(cacheKey: string) {
//         this.cache.delete(cacheKey);
//     }
//
//     public containsImage(cacheKey: string) {
//         return this.cache.find(cacheKey);
//     }
//
//     public getCachedImage(cacheKey: string) {
//         return this.cache.get(cacheKey);
//     }
// }
