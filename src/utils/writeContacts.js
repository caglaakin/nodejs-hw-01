import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    let existingContacts = [];
    try {
      existingContacts = await readContacts();
      if (!Array.isArray(existingContacts)) {
        existingContacts = [];
      }
    } catch (err) {
      existingContacts = [];
      console.log('No existing contacts found, creating new database.', err);
    }

    const contactsToAdd = Array.isArray(updatedContacts)
      ? updatedContacts
      : [updatedContacts];

    const newContacts = [...existingContacts, ...contactsToAdd];

    await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2), 'utf8');
    console.log(
      `Total: ${contactsToAdd.length} contact(s) added successfully.`,
    );
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
