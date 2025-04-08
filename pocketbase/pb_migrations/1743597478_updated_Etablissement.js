/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool1087378546",
    "name": "partenariat_etablissement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // remove field
  collection.fields.removeById("bool1087378546")

  return app.save(collection)
})
