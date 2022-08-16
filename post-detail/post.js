import { renderPostDetail } from '../render-utils.js';
import { getPostsById } from '../fetch-utils.js';

const postDetailEl = document.getElementById('post-detail');

const params = new URLSearchParams(window.location.search);

async function displayPostDetail() {
    const post = await getPostsById(params.get('id'));
    const postEl = renderPostDetail(post);
    postDetailEl.append(postEl);
}

displayPostDetail();
