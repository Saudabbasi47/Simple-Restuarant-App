"use client";
import Card from "./components/card";
import { useState } from "react";
import MenuList from "./components/menu";
export default function Page() {
  const [Menu, setMenu] = useState(MenuList);

  const Filterdata = (category: string) => {
    let updatedMenu = MenuList.filter((e) => {
      return e.category === category;
    });

    setMenu(updatedMenu);
  };

  return (
    <>
      <section className="flex justify-center items-center mt-14">
        <ul className="flex space-x-12 justify-center items-center bg-white text-lg  py-3 px-9 rounded-xl">
          <li className="border-purple-500 border-b-4 duration-200 border-opacity-0 hover:border-opacity-100">
            <button onClick={() => Filterdata("Breakfast")}>
              <p>BreakFast</p>
            </button>
          </li>
          <li className="border-purple-500 border-b-4 duration-200 border-opacity-0 hover:border-opacity-100">
            <button onClick={() => Filterdata("Dinner")}>
              <p>Dinner</p>
            </button>
          </li>
          <li className="border-purple-500 border-b-4 duration-200 border-opacity-0 hover:border-opacity-100">
            <button onClick={() => Filterdata("Lunch")}>
              <p>Lunch</p>
            </button>
          </li>
          <li className="border-purple-500 border-b-4 duration-200 border-opacity-0 hover:border-opacity-100">
            <button onClick={() => setMenu(MenuList)}>
              <p>All</p>
            </button>
          </li>
        </ul>
      </section>

      <main className="flex flex-wrap justify-center content-center p-9  overflow-x-hidden bg-gradient-to-b from-blue-200 to-purple-200 gap-8">
        {Menu.map((menu) => (
          <Card
          key={menu.id}
            name={menu.name}
            image={menu.image}
            id={menu.id}
            cate={menu.category}
            detail={menu.description}
          />
        ))}
      </main>
    </>
  );
}
