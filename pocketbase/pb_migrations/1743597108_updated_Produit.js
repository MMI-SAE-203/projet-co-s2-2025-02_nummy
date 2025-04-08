/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select832395185",
    "maxSelect": 1,
    "name": "continent_produit",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Europe"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // remove field
  collection.fields.removeById("select832395185")

  return app.save(collection)
})
