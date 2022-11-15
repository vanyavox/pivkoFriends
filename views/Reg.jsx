const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg({ title }) {
  return (
    <Layout title={title}>
      <div className='login'>
        <form id='regForm' action='/reg' method='post'>
        <p className='auth'>
            Логин:
          </p>
          <input name='login' type='text' placeholder='ЛюбительПивка' />
          <p className='auth'>
            E-mail:
          </p>
          <input name='email' type='email' placeholder='example@site.ru' />
          <p className='auth'>
            Пароль:
          </p>
          <input name='password1' type='password' minLength='5' placeholder='Пароль' />
          <p className='auth'>
            Повторите ваш пароль:
          </p>
          <input name='passwordRepeat' type='password' minLength='5' placeholder='Повторите пароль' />
          <br />
          <p className='auth'>
            <button type='submit'>Зарегистрироваться</button>
          </p>
        </form>
        <div className='errorBlock'></div>
      </div>
    </Layout>
  )
}