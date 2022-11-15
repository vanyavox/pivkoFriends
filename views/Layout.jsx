const React = require('react');
const Header = require('./Header');
const Footer = require('./Footer');

function Layout({ children, name, title }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link href="/styles/style.css" rel="stylesheet" />
        <script defer src="/js/client.js" />
        <title>{title}</title>
      </head>
      <body>
        <Header name={name} />
        <div className='content'>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

module.exports = Layout;