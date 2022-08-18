import { getProfiles } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const profileContainer = document.getElementById('profile-container');

async function displayAllUsers() {

    const users = await getProfiles();
    for (let user of users) {
        profileContainer.append(renderProfile(user));
    }
}


displayAllUsers();


