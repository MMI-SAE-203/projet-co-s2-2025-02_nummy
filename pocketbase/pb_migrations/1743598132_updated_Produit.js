/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select25461714",
    "maxSelect": 1,
    "name": "type_produit",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Snacks"
    ]
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text897092882",
    "max": 0,
    "min": 0,
    "name": "pays_produit",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_391456230",
    "hidden": false,
    "id": "relation2302450709",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "recettes_produit",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // remove field
  collection.fields.removeById("select25461714")

  // remove field
  collection.fields.removeById("text897092882")

  // remove field
  collection.fields.removeById("relation2302450709")

  return app.save(collection)
})
