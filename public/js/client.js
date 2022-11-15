// Регистрация
const regForm = document.querySelector('#regForm');
if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      login, email, password1, passwordRepeat, method,
    } = e.target;
    const res = await fetch('/reg', {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        login: login.value,
        email: email.value,
        password1: password1.value,
        passwordRepeat: passwordRepeat.value,
      }),
    });
    const data = await res.json();

    if (!data.status) {
      const errorBlock = document.querySelector('.errorBlock');
      errorBlock.innerHTML = data.message;
      errorBlock.style.visibility = 'visible';
    } else {
      window.location.assign('/');
    }
  });
}

// Авторизация

const logForm = document.querySelector('#loginForm');
if (logForm) {
  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    const { email, password, method } = e.target;
    const res = await fetch('/auth', {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();

    if (!data.status) {
      const errorBlock = document.querySelector('.errorBlock');
      errorBlock.innerHTML = data.message;
      errorBlock.style.visibility = 'visible';
    } else {
      window.location.assign('/');
    }
  });
}

// Удаление карточек

document.querySelector('.cards').addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete_btn')) {
    const res = await fetch(`/${e.target.dataset.id}`, {
      method: 'delete',
    });
    const data = await res.json();
    if (data.message) {
      e.target.parentNode.parentNode.remove();
    }
  }
  if (e.target.classList.contains('update_btn')) {
    const div = e.target.closest('div');
    div.querySelector('.updateCard').classList.toggle('active');
  }
});

// Обновление карточек

document.querySelectorAll('.update_form').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { title, desc } = e.target;
    // const div = e.target.parentNode.parentNode;
    const papa = document.getElementById(e.target.dataset.id);
    // id Формы
    const pivoId = e.target.dataset.id;
    const res = await fetch(`/${pivoId}`, {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        desc: desc.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'updated') {
      papa.querySelector('h3').innerHTML = title.value;
      papa.querySelector('p').innerHTML = desc.value;
      papa.querySelector('.updateCard').classList.toggle('active');
    }
  });
});

// parentNode, parentNode, parentNode...
