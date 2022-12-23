// @ts-nocheck
import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/dexie';
import { mySchema } from './schema';
let dbPromise;

const _create = async () => {
    console.log('_create');
    const db = await createRxDatabase({
      name: 'rxdbdemo',
      storage: getRxStorageDexie()
    });
    console.log('creating collections');
    await db.addCollections({
      humans: { 
        schema: mySchema
      }});
    dbPromise = db;
    console.log('db:', db);
    return db;
  };


  export const db = () => (dbPromise ? dbPromise : _create());