import { getProfiles, signOutUser, checkAuth } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const profileContainer = document.getElementById('profile-container');

async function displayAllUsers() {

    const users = await getProfiles();
    for (let user of users) {
        profileContainer.append(renderProfile(user));
    }
}


displayAllUsers();

const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
// make sure we have a user
checkAuth();
