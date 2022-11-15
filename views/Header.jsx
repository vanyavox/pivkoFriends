const React = require('react');

module.exports = function Header({ name }) {
  return (
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
}