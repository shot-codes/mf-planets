migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("j6ton9wxs3htqc9");

    collection.viewRule = "";

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("j6ton9wxs3htqc9");

    collection.viewRule = null;

    return dao.saveCollection(collection);
  }
);
