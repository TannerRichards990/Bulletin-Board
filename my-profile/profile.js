import { checkAuth, saveProfile, getProfile, signOutUser } from '../fetch-utils.js';

const formEl = document.getElementById('profile-form');
const profileNameInput = formEl.querySelector('[name=user-name]');
const profileBioInput = formEl.querySelector('[name=user-bio]');
const user = checkAuth();

const userProfile = {
    name: '',
    bio: ''
};

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    userProfile.name = data.get('user-name');
    userProfile.bio = data.get('user-bio');

    console.log(userProfile);

    await saveProfile(userProfile);

    formEl.reset();

});


async function displayProfile() {
    const response = await getProfile(user.id);
    if (response) {
        profileNameInput.value = response.name;
        profileBioInput.value = response.bio;
    }
}

displayProfile();

const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
// make sure we have a user
checkAuth();