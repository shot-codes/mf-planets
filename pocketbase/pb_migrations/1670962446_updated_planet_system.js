migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2cvkiuapkkuci28")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e4jty7i3",
    "name": "field1",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "2cvkiuapkkuci28",
      "cascadeDelete": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbgqljpy",
    "name": "label",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2cvkiuapkkuci28")

  // remove
  collection.schema.removeField("e4jty7i3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbgqljpy",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
