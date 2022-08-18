import { saveProfile } from '../fetch-utils.js';

const formEl = document.getElementById('profile-form');

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

