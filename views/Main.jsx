const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function Main({ title, name, curUser, pivko }) {
  return (
    (name ? (
      <Layout title={title} name={name} curUser={curUser}>
        <h3>Все карточки: </h3>
        <div className="cards">
 
            {pivko.map((pivo) => (
              <Card key={pivo.id} pivo={pivo} curUser={curUser} />
            ))}

        </div>
      </Layout >
    )
      : (
        <Layout title={title} name={name}>
          <h3>Залогинься, а то чо ты как этот то а?</h3>
        </Layout>
      ))
  );
}

module.exports = Main;