import React from "react";

// Styles
import style from "../../styles/account/myFavourites.module.css";

// Components
import { Card } from "./Card";

export default function MyFavourites({ favData }) {
  return (
    <section className="pb-2">
      <h2 className="mb-2 text-3xl font-semibold text-center mt-5">
        Любими продукти
      </h2>
      {favData.length == 0 && (
        <div className="text-center text-secondary pb-10">
          Нямате сложени любими продукти
        </div>
      )}
      <section
        className={` flex-wrap gap-5 justify-center grid ${style.itemsContainer}`}
      >
        {favData.map((data) => {
          return <Card key={data._id} itemData={data} />;
        })}
      </section>
    </section>
  );
}
