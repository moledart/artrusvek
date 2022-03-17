import React from "react";
import { useSelector } from "react-redux";

const AdminAside = ({ selectedData, setSelectedData }) => {
  //State
  const { plays, actors, status } = useSelector((state) => state.data);

  const dataSwitches = [
    { id: 1, text: "Спектакли", data: plays },
    { id: 2, text: "Актеры", data: actors },
    { id: 3, text: "Новости", data: "news" },
  ];

  return (
    <aside>
      <ul>
        {dataSwitches.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectedData(item.data)}
            className={selectedData === item.data ? "isActive" : ""}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminAside;
