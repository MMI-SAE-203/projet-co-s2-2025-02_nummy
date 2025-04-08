/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3144470268",
    "maxSize": 0,
    "name": "infos_etablissement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "bool1483932676",
    "name": "favori_etablissement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // remove field
  collection.fields.removeById("editor3144470268")

  // remove field
  collection.fields.removeById("bool1483932676")

  return app.save(collection)
})
