const React = require('react');
const Layout = require('./Layout');

function Main({ title, name }) {
  return (
    (name ? (
      <Layout title={title} name={name}>
        <h3>Тут Карточки</h3>
      </Layout>
    )
      : (
        <Layout title={title} name={name}>
          <h3>Залогинься, а то чо ты как этот то а?</h3>
        </Layout>
      ))
  );
}

module.exports = Main;