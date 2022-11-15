const React = require('react');
const Layout = require('./Layout');

function Main({ title, name }) {
  return (
    <Layout title={title} name={name}>
      Тут что-то
    </Layout>
  );
}

module.exports = Main;