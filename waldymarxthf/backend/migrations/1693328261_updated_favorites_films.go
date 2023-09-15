package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models/schema"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("h7w5dd931w4ap1k")
		if err != nil {
			return err
		}

		// update
		edit_users_id := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "nf8sj4ir",
			"name": "users_id",
			"type": "relation",
			"required": true,
			"unique": false,
			"options": {
				"collectionId": "_pb_users_auth_",
				"cascadeDelete": true,
				"minSelect": null,
				"maxSelect": 1,
				"displayFields": [
					"id"
				]
			}
		}`), edit_users_id)
		collection.Schema.AddField(edit_users_id)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("h7w5dd931w4ap1k")
		if err != nil {
			return err
		}

		// update
		edit_users_id := &schema.SchemaField{}
		json.Unmarshal([]byte(`{
			"system": false,
			"id": "nf8sj4ir",
			"name": "users",
			"type": "relation",
			"required": true,
			"unique": false,
			"options": {
				"collectionId": "_pb_users_auth_",
				"cascadeDelete": true,
				"minSelect": null,
				"maxSelect": 1,
				"displayFields": [
					"email"
				]
			}
		}`), edit_users_id)
		collection.Schema.AddField(edit_users_id)

		return dao.SaveCollection(collection)
	})
}
