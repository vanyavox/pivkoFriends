const React = require('react');
const Layout = require('./Layout');

module.exports = function Card({pivo}) {
  return (
    <Layout>
      <li data-id={pivo.id} className="card">
      <h3>{pivo.title}</h3>
      <p>{pivo.desc}</p>
      <img className="img_pivo" src={pivo.pic} alt="pivo" />
      {user === pivo.user_id && (
        <div>
          <button className="delete_btn" type="button">
            Удалить пост
          </button>
          <button className="update_btn" type="button">
            Изменить
          </button>
          <div className="updateBeer">
            <form className="updateBeer" method="post">
              <input name="title" type="text" />
              <input name="desc" type="text" />
              <button className="save" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>
      )}
    </li>
    </Layout>
  )
}