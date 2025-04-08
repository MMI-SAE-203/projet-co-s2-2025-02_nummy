/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // remove field
  collection.fields.removeById("text286960287")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text286960287",
    "max": 0,
    "min": 0,
    "name": "pays_etablissement",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
