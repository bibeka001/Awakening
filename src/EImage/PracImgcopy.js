import React, { useState } from "react";
import MenuImg from "./MenuImg";
import MenuItems from "./MenuItems";
import CatMenu from "./CatMenu";
const allCatValues = [
  ...new Set(
    MenuImg.map((currElem) => {
      return currElem.category;
    })
  ),
  "all",
];
console.log(allCatValues);
const PracImg = () => {
  const [items, setItems] = useState(MenuImg);
  const [catItems, setCatItems] = useState(allCatValues);
  const filterItem = (categItem) => {
    if (categItem === "all") {
      setItems(MenuImg);
      return;
    }
    const updatedItems = MenuImg.filter((currElem) => {
      return currElem.category === categItem;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />
      {/*Our Menu List will come here */}

      <CatMenu filterItem={filterItem} catItems={catItems} />
      {/*My main items section */}
      <MenuItems items={items} />
    </>
  );
};

export default PracImg;
