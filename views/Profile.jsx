const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ title, name, curUser}) {
  return (
    (name ? (
      <Layout title={title} name={name} curUser={curUser}>
        <div className='content'>
          <h2>Профиль</h2>
          <strong>ID: </strong>{curUser}<br/>
          <strong>LOGIN: </strong>{name}<br/>
        </div>
      </Layout >
    ) : (
      <Layout name={name} curUser={curUser}>
        <div className='content'>
          <h2>Профиль Недоступен</h2>
          Залогинься плиз
        </div>
      </Layout>
    ))
  )
}

