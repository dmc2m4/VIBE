import React from "react";
import { useState } from "react";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState(false);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="favorites_content">
      <button
        onClick={() => {
          setFavorites(!favorites);
        }}
        className="btn_favorites"
      >
        Favorites
      </button>
      {favorites ? (
        <div className="favorite_list">
          {arr.length ? (
            arr.map((e, i) => {
              return (
                <div>
                  <button>x</button>
                  <span key={i}>{e}</span>
                </div>
              );
            })
          ) : (
            <div>"empty"</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Favorites;
