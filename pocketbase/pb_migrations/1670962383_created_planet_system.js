migrate((db) => {
  const collection = new Collection({
    "id": "2cvkiuapkkuci28",
    "created": "2022-12-13 20:13:03.361Z",
    "updated": "2022-12-13 20:13:03.361Z",
    "name": "planet_system",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2cvkiuapkkuci28");

  return dao.deleteCollection(collection);
})
