# Demo notes

* introduce app function (cache for performance and access resons)
* show the smartsheet with the images, to contextualize the functionality.
* introduct the app structure, specifically `app.html`, `ImageCache.js`.
* demo the app as it is in js.
* introduce `tsconfig.json` and specifically `noImplicitAny`.
* back to `ImageCache.js` and `ts`. Uncomment the ts version, side by side comparison.
* `LruCache` as third party library - uncomment.
* Config Manager, assumption that it is Not Yet migrated - but we need to leverage its API
* the solution to this is to use `tsmigration.d.ts` to connect JS and TS part.
* the migration is completed when this file is empty.
* not implementing all the interfaces but rather providing the d.ts file, as that would force to implement all the classes traversing large parts of the code base.
* switch to `noImplicitAny` : false - all works BUT no control over the API - defeats the purpose of predictive code
* `noImplicitAny` : true
* the idea is that JS and TS coexist, bonded through the definition file
* when config manager is transitioned into TS, its definition is taken away, and the consumer will look at the implementation directly rather than at the d.ts file.
* (OPTIONAL) - convert the ConfigManager?