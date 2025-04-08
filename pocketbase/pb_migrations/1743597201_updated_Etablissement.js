/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select2877274097",
    "maxSelect": 1,
    "name": "continent_etablissement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Europe",
      "Asie",
      "Amérique",
      "Amérique du Sud",
      "Afrique"
    ]
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select590526566",
    "maxSelect": 1,
    "name": "categorie_etablissement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Restaurant",
      "Épicerie"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // remove field
  collection.fields.removeById("select2877274097")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select590526566",
    "maxSelect": 1,
    "name": "categorie_etablissement",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "restaurant",
      "epicerie"
    ]
  }))

  return app.save(collection)
})
