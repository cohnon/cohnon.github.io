const form = document.getElementById('comment-form');
const open = document.getElementById('add-comment');
const cancel = document.getElementById('cancel-comment');
const comments = document.getElementsByClassName('root');
const replies = document.getElementsByClassName('reply-comment');
const root = document.getElementById('root-form');
const parent = document.getElementById('comment-parent-id');
open.onclick = () => {
  parent.value = '';
  root.appendChild(form);
  form.style.display = 'block';
  form.scrollIntoView({behavior: 'smooth'});
}
cancel.onclick = () => {
  form.style.display = 'none';
}
for (let i = 0; i < replies.length; ++i) {
  replies.item(i).onclick = (d) => {
    parent.value = comments.item(i).id;
    comments.item(i).appendChild(form);
    form.style.display = 'block';
    form.scrollIntoView({behavior:'smooth'});
  };
}