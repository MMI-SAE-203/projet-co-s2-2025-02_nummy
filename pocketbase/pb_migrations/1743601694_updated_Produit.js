/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // update field
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
      "Boissons",
      "Produits laitiers",
      "Céréales & Féculents",
      "Condiments & Épices",
      "Viandes",
      "Fruits",
      "Snacks"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // update field
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

  return app.save(collection)
})
