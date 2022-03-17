import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSortableData } from "./util";

const AdminTableData = ({ selectedData, setSelectedData }) => {
  //State
  const { plays, actors, status } = useSelector((state) => state.data);
  //Current chosen data
  const [currentPlay, setCurrentPlay] = useState({});
  // Rendering first data on screen
  useEffect(() => {
    setSelectedData(plays);
  }, [plays]);
  //Sorting
  const { items, requestSort, sortConfig } = useSortableData(selectedData);
  //Show all fields of the selected component
  const toggleShowFields = (play) => {
    setCurrentPlay(play);
  };

  const renderData = () => {
    if (selectedData == actors) {
      return (
        <table>
          <thead>
            <tr>
              <td>Фото</td>
              <td onClick={() => requestSort("name")}>Имя</td>
              <td onClick={() => requestSort("role")}>Роль</td>
              <td onClick={() => requestSort("sortId")}>Номер для сортировки</td>
            </tr>
          </thead>
          <tbody>
            {items.map((actor) => {
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
    } else if (selectedData == plays) {
      return (
        <table>
          <thead>
            <tr>
              <td>Фото</td>
              <td onClick={() => requestSort("name")}>Название</td>
              <td onClick={() => requestSort("sortId")}>Номер для сортировки</td>
            </tr>
          </thead>
          <tbody>
            {items.map((play) => {
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

  return <>{renderData()}</>;
};

export default AdminTableData;