// js/database.js

import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log('PUT to the database');
    // Opens the database named 'jate'.
    const jateDb = await openDB('jate', 1);
    // Creates a transaction in 'readwrite' mode.
    const tx = jateDb.transaction('jate', 'readwrite');

    const store = tx.objectStore('jate');
    const request = store.put({ id: 1, value: content });
    const result = await request;
    console.log('Data saved to the database', result);
  } catch (error) {
    console.error('putDb not implemented', error);
  }
};

// logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    console.log('GET from the database');
    // Opens the database named 'jate'.
    const jateDb = await openDB('jate', 1);
    // Creates a transaction in 'readonly' mode.
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    // Retrieves the content with id 1 from the database.
    const request = store.get(1);
    const result = await request;
    console.log('result.value', result);
    return result?.value;
  } catch (error) {
    console.error('getDb not implemented', error);
  }
};

initdb();
