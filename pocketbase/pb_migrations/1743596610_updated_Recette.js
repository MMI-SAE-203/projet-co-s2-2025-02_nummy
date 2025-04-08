/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_391456230")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file1572839607",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "hero_recette",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1432748709",
    "max": 0,
    "min": 0,
    "name": "pays_recette",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number2598695455",
    "max": null,
    "min": null,
    "name": "personnes_recette",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number960411579",
    "max": null,
    "min": null,
    "name": "temps_recette",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor724607956",
    "maxSize": 0,
    "name": "ingredients_recette",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2001447505",
    "hidden": false,
    "id": "relation1881784649",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "produits_recette",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file3603332594",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "images_recette",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor4122951496",
    "maxSize": 0,
    "name": "preparation_recette",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool607635383",
    "name": "favori_recette",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select3996552927",
    "maxSelect": 1,
    "name": "continent_recette",
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_391456230")

  // remove field
  collection.fields.removeById("file1572839607")

  // remove field
  collection.fields.removeById("text1432748709")

  // remove field
  collection.fields.removeById("number2598695455")

  // remove field
  collection.fields.removeById("number960411579")

  // remove field
  collection.fields.removeById("editor724607956")

  // remove field
  collection.fields.removeById("relation1881784649")

  // remove field
  collection.fields.removeById("file3603332594")

  // remove field
  collection.fields.removeById("editor4122951496")

  // remove field
  collection.fields.removeById("bool607635383")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select3996552927",
    "maxSelect": 1,
    "name": "Continent",
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

  return app.save(collection)
})
