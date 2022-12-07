migrate(
  (db) => {
    const collection = new Collection({
      id: "j6ton9wxs3htqc9",
      created: "2022-12-06 22:48:40.811Z",
      updated: "2022-12-06 22:48:40.811Z",
      name: "solar_systems",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "zfobv0rb",
          name: "data",
          type: "json",
          required: true,
          unique: false,
          options: {},
        },
      ],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("j6ton9wxs3htqc9");

    return dao.deleteCollection(collection);
  }
);
