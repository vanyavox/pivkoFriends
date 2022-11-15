const React = require('react');

function Card({ pivo, curUser }) {
  return (
    <div data-id={pivo.id} id={pivo.id} className="card">
      <h3>{pivo.title}</h3>
      <p>{pivo.desc}</p>
      <img className="img_pivo" src={pivo.pic} alt="pivo" />
      {curUser === pivo.userId && (
        <div>
          <button className="delete_btn" type="button">
            Удалить
          </button>
          <button className="update_btn" type="button">
            Обновить
          </button>
          <div className="updateCard">
            <form id={pivo.id} className="update_form" method="post">
              <input name="title" type="text" placeholder={pivo.title}/>
              <input name="desc" type="text" placeholder={pivo.desc}/>
              <button className="save" type="submit">
                Готово
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

module.exports = Card;