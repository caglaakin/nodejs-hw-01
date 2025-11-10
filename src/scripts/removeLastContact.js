import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < contacts.length - 1; i++) {
      newContacts.push(contacts[i]);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts));
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeLastContact();
