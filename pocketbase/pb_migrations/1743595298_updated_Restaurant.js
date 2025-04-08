/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // update collection data
  unmarshal({
    "name": "Etablissement"
  }, collection)

  // add field
  collection.fields.addAt(6, new Field({
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

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3940192840",
    "max": 0,
    "min": 0,
    "name": "nom_etablissement",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2223530568",
    "max": 0,
    "min": 0,
    "name": "adresse_etablissement",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url3416038906",
    "name": "site_etablissement",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // update field
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

  // update field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text902428214",
    "max": 0,
    "min": 0,
    "name": "ville_etablissement",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1517822335")

  // update collection data
  unmarshal({
    "name": "Restaurant"
  }, collection)

  // remove field
  collection.fields.removeById("select590526566")

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3940192840",
    "max": 0,
    "min": 0,
    "name": "nom_restaurant",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2223530568",
    "max": 0,
    "min": 0,
    "name": "adresse_restaurant",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url3416038906",
    "name": "site_restaurant",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date304884938",
    "max": "",
    "min": "",
    "name": "horaires_restaurant",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text902428214",
    "max": 0,
    "min": 0,
    "name": "ville_restaurant",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
