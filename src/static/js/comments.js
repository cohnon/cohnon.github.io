const form = document.getElementById('comment-form');
const comments = document.getElementsByClassName('root');
const replies = document.getElementsByClassName('reply-comment');
const submit = document.getElementById('submit-comment');
const message = document.getElementById('form-message');
document.getElementById('add-comment').onclick = () => {
  document.getElementById('comment-parent-id').value = '';
  document.getElementById('root-form').appendChild(form);
  form.style.display = 'block';
  form.scrollIntoView({behavior: 'smooth'});
}
document.getElementById('cancel-comment').onclick = () => {
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
form.onsubmit = async (e) => {
  e.preventDefault();
  const f = e.currentTarget;
  const url = f.action;
  message.style.border = '';
  try {
    const formData = new FormData(f);
    const data = Object.fromEntries(formData.entries());
    if (data.message.length === 0) {
      return message.style.border = '2px solid red';
    }
    const jsonData = JSON.stringify({
      fields:{name:data.name, message:data.message, parent:data.parent},
      options:{slug:data.slug}
    });
    submit.innerHTML = 'Sending...';
    const res = await fetch(url, {method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:jsonData});
    if(!res.ok) {
      return open('Something went wrong', (await res.json()).errorCode);
    }
    open('Successfully submitted', 'Your comment is <a href="https://github.com/coherentnonsense/coherentnonsense.github.io/pulls">awaiting approval</a>. It will appear on this site after it has been accepted.');
  } catch (e) {
    open('Something went wrong', 'Internal server error. Sorry ):');
  }
}
const modal = document.getElementById('modal');
function open(h, p) {
  submit.innerHTML = 'Submit';
  modal.style.display = 'block';
  document.getElementById('modal-h').innerHTML = h;
  document.getElementById('modal-p').innerHTML = p;
}
document.getElementById('modal-close').onclick = () => {
  modal.style.display = 'none';
}
