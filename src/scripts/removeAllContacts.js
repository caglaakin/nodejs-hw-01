import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length > 0) {
            await fs.writeFile(PATH_DB, JSON.stringify([]));
        }
    } catch (error) {
        console.error('Error removing contacts:', error);
    }
};

removeAllContacts();
