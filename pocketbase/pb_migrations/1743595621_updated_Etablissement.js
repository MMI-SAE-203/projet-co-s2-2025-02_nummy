/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // remove field
  collection.fields.removeById("date304884938")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date304884938",
    "max": "",
    "min": "",
    "name": "horaires_etablissement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
