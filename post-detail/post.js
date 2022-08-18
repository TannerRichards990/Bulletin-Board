import { renderPostDetail } from '../render-utils.js';
import { checkAuth, deletePostById, getPostsById, } from '../fetch-utils.js';

const postDetailEl = document.getElementById('post-detail');
const user = checkAuth();

const params = new URLSearchParams(window.location.search);

async function displayPostDetail() {
    const post = await getPostsById(params.get('id'));
    const postEl = renderPostDetail(post);
    postDetailEl.append(postEl);
    if (user.id === post.user_id) {
        const buttonEl = document.createElement('button');
        buttonEl.textContent = 'delete';
        buttonEl.classList.add('post');
        buttonEl.addEventListener('click', async () => {
            await deletePostById(post.id);
            location.replace(`../`);
            
        });
        postDetailEl.append(buttonEl);
    }
}

displayPostDetail();
