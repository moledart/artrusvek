import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase-config";
import { selectUser } from "../reducers/userSlice";
import { useDispatch } from "react-redux";
import Login from "./Login";

const Admin = () => {
  //User and logout
  const user = useSelector(selectUser);
  const handleLogout = () => {
    auth.signOut();
  };
  //State
  const { plays, actors, status } = useSelector((state) => state.data);
  const [selectedData, setSelectedData] = useState("Спектакли");
  const [currentPlay, setCurrentPlay] = useState({});
  //Sorting
  const [sortedField, setSortedField] = useState(null);
  let sortedActors = [...actors];
  let sortedPlays = [...plays];

  if (selectedData === "Спектакли" && sortedField !== null) {
    sortedPlays.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  } else if (selectedData === "Актеры" && sortedField !== null) {
    sortedActors.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }

  //Aside ul
  const dataSwitches = [
    { id: 1, text: "Спектакли" },
    { id: 2, text: "Актеры" },
    { id: 3, text: "Новости" },
  ];

  //Show all fields of the selected component
  const toggleShowFields = (play) => {
    setCurrentPlay(play);
  };

  const renderData = () => {
    if (selectedData === "Актеры") {
      return (
        <table>
          <thead>
            <tr>
              <td>Фото</td>
              <td onClick={() => setSortedField("name")}>Имя</td>
              <td onClick={() => setSortedField("role")}>Роль</td>
              <td onClick={() => setSortedField("sortId")}>Номер для с ортировки</td>
            </tr>
          </thead>
          <tbody>
            {sortedActors.map((actor) => {
              return (
                <tr key={actor.id}>
                  <td>
                    <img
                      src={actor.photo}
                      width="60px"
                      height="60px"
                      style={{ objectFit: "cover", borderRadius: "50%" }}
                    />
                  </td>
                  <td>{actor.name}</td>
                  <td>{actor.role}</td>
                  <td>{actor.sortId}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else if (selectedData === "Спектакли") {
      return (
        <table>
          <thead>
            <tr>
              <td>Фото</td>
              <td onClick={() => setSortedField("name")}>Название</td>
              <td onClick={() => setSortedField("sortId")}>Номер для сортировки</td>
            </tr>
          </thead>
          <tbody>
            {sortedPlays.map((play) => {
              return (
                <React.Fragment key={play.id}>
                  <tr onClick={() => toggleShowFields(play)}>
                    <td>
                      <img
                        src={play.thumbnail}
                        width="100px"
                        height="60px"
                        style={{ objectFit: "cover", objectPosition: "top center" }}
                      />
                    </td>
                    <td>{play.name}</td>
                    <td>{play.sortId}</td>
                  </tr>
                  <tr className={play.id === currentPlay.id ? "visible" : "hidden"}>
                    {/* <div className="cms_data-wrapper">
                      <div className="cms_data">
                        <label htmlFor="name">Название</label>
                        <input type="text" value={play.name} name="name" id="name" />
                      </div>
                      <div className="cms_data">
                        <label htmlFor="genre">Жанр</label>
                        <input type="text" value={play.genre} name="genre" id="genre" />
                      </div>
                      <div className="cms_data">
                        <label htmlFor="briefInfo">Короткая информация</label>
                        <textarea value={play.briefInfo} name="name" id="name" />
                      </div>
                      <div className="cms_data">
                        <label htmlFor="description">Полное описание</label>
                        <textarea
                          value={play.description}
                          name="description"
                          id="description"
                        />
                      </div>
                      <div className="cms_data">
                        <label htmlFor="length">Длительность</label>
                        <input
                          type="text"
                          value={play.length}
                          name="length"
                          id="length"
                        />
                      </div>
                    </div> */}
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      );
    }
  };

  return (
    <main>
      {user ? (
        <section className="admin_section">
          <div className="section_header">
            <h1>Добрый день, {user.name}!</h1>
            <button onClick={handleLogout} className="logout">
              Выйти
            </button>
          </div>
          <div className="cms_content">
            <aside>
              <ul>
                {dataSwitches.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setSelectedData(item.text)}
                    className={selectedData === item.text ? "isActive" : ""}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </aside>
            {renderData()}
          </div>
        </section>
      ) : (
        <Login />
      )}
    </main>
  );
};

export default Admin;
