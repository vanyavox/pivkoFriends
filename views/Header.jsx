const React = require('react');

module.exports = function Header({ name }) {
  return (
    (name ? (
      <div className="header">
        <div className="logo">
          <strong>
            Welcome to pivkoFriends
          </strong>
        </div>
        <div className="headerMenu">
          <p>Привет, {name}</p>
          [<a href="/profile">Профиль</a>]
          [<a href="/logout">Выйти</a>]
        </div>
      </div>
    ) : (
      <div className="header">
        <div className="logo">
          <strong>
            Welcome to pivkoFriends
          </strong>
        </div>
        <div className="headerMenu">
          <a href="/auth">Вход</a>
          <a href="/reg">Регистрация</a>
        </div>
      </div>
    )
    )
  )
}