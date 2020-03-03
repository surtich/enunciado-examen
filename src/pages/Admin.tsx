import React, { useContext, useEffect, useState } from "react";
import { LoginContext, RoomContext } from "../context";

const Admin = () => {
  const { isLogged } = useContext(LoginContext);
  const { rooms, changeRoomName } = useContext(RoomContext);

  const [selected, setSelected] = useState<string | null>(null);
  useEffect(() => {}, [rooms]);

  if (!isLogged) {
    /*return (
      <div>
        You must be logged to access this resource
        </div>
    );*/
  }
  return (
    <section className="gallery">
      {rooms.map((room, i) => {
        const className = `gallery__item gallery__item--${i + 1}`;
        return (
          <figure
            key={room.id}
            className={className}
            onClick={() => {
              setSelected(room.id);
            }}
          >
            <textarea
              onKeyDown={e => {
                if (e.keyCode === 13 || e.keyCode === 27) {
                  setSelected(null);
                }
              }}
              onBlur={() => setSelected(null)}
              onChange={e => {
                changeRoomName(room.id, e.target.value);
              }}
              className="gallery__title"
              value={room.name}
              style={{ opacity: selected === room.id ? 1 : 0 }}
            />
            <img
              src={room.images[0]}
              alt="Gallery 1"
              className="gallery__img"
            />
          </figure>
        );
      })}
    </section>
  );
};

export default Admin;
