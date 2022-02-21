import React from "react";
import { render, screen } from "@testing-library/react";
import Accueil from "./accueil/pages/Accueil";
import Dishes from "./products/pages/Dishes";
import Drinks from "./products/pages/Drinks";
import Desserts from "./products/pages/Desserts";


describe("Check titles of pages", () => {
  test("render Accueil page and check title", () => {
    render(<Accueil />);
    const accueilTitle = screen.getByText(/goutez à la qualité supérieur/i);
    expect(accueilTitle).toBeInTheDocument();
  });

  test("render Dishes page and check title", () => {
    render(<Dishes />);
    const dishesTitle = screen.getByText(/Choisissez les plats selon vos préférences/i);
    expect(dishesTitle).toBeInTheDocument();
  });

  test("render Drinks page and check title", () => {
    render(<Drinks />);
    const drinksTitle = screen.getByText(/Choisissez les boissons selon vos préférences/i);
    expect(drinksTitle).toBeInTheDocument();
  });

  test("render Dishes page and check title", () => {
    render(<Desserts />);
    const dessertsTitle = screen.getByText(/Choisissez les desserts selon vos préférences/i);
    expect(dessertsTitle).toBeInTheDocument();
  });
});
