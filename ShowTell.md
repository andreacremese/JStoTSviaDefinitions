# Demo notes

* show the smartsheet with the images, to contextualize the functionality.

* introduce app function (cache for performance)

* introduct the app structure, specifically `app.html`, `ImageCache.js`.

* `LruCache` as third party library.

* demo the app as it is in js.

* introduce `tsconfig.json` and specifically `noImplicitAny`.

* show the tab that is running typescript.

* back to `ImageCache.js` and `ts`. Uncomment the ts version, side by side comparison.

* Config Manager, assumption that it is Not Yet migrated - but we need to leverage its API

* the solution to this is to use `tsmigration.d.ts` to connect JS and TS part. 

(The idea is to not have to write complete interfaces and definition of the 
type as we'd need to traverse most of the front end code base. This would take a long time and, instead, when the component that we are referencing is converted,  its definition is removed and the existing code will interact directly with the TypeScript implementation.)

* the migration is completed when the `.d.ts` file is empty.

* not implementing all the interfaces but rather providing the d.ts file, as that would force to implement all the classes traversing large parts of the code base.

* switch to `noImplicitAny` : false - all works BUT no control over the API - defeats the purpose of predictive code

* `noImplicitAny` : true

* the idea is that JS and TS coexist, bonded through the definition file

* when config manager is transitioned into TS, its definition is taken away, and the consumer will look at the implementation directly rather than at the d.ts file.

* convert the ConfigManager and remove the entry in the `d.ts` file.

* add a method to the ConfigManager in order to show a `refactor` 