import {createFakeContact} from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const contacts = [];
    for (let i = 0; i < number; i++){
        contacts.push(createFakeContact());
    }

    await writeContacts(contacts);
};

generateContacts(5);
