const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <div className='login'>
        <form id='loginForm' action='/login' method='post'>
          <p className='auth'>
            E-mail:
          </p>
          <input type='email' placeholder='example@site.com' />
          <p className='auth'>
            Пароль:
          </p>
          <input type='password' minLength='5' placeholder='Enter your password' />
          <br />
          <p className='auth'>
            <button type='submit'>Войти</button>
          </p>
        </form>
        <div className='errorBlock'></div>
      </div>
    </Layout>
  );
}
