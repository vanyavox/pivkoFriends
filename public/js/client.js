// Регистрация
const regForm = document.querySelector('#regForm');
if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      login, email, password1, passwordRepeat, method,
    } = e.target;
    const res = await fetch('/auth/reg', {
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
