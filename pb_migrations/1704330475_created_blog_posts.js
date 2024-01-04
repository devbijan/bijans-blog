/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mp52y5be9ulzbg8",
    "created": "2024-01-04 01:07:55.207Z",
    "updated": "2024-01-04 01:07:55.207Z",
    "name": "blog_posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8xyvrsyp",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xzjefozp",
        "name": "body",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("mp52y5be9ulzbg8");

  return dao.deleteCollection(collection);
})
