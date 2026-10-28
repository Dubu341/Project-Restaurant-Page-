function menuContent() {
  const content = document.querySelector("#content");

  function createElement(tag, className, text) {
    let element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (text) element.textContent = text;
    return element;
  }

  const apps = createElement("div", "apps", "");

  const appsHead = createElement("h4", "", "APPS");

  const appsItemOne = createElement("div", "item", "");
  const itemOneName = createElement("h4", "", "SMALL HAND-CUT FRIES");
  const itemOnePrice = createElement("span", "price", "5.50");
  const itemOneDes = createElement(
    "span",
    "description",
    "With cheese and/or beef",
  );

  const appsItemTwo = createElement("div", "item", "");
  const itemTwoName = createElement("h4", "", "SWEET POTATO FRIES");
  const itemTwoPrice = createElement("span", "price", "4.50");
  const itemTwoDes = createElement(
    "span",
    "description",
    "Small, topped with brown sugar",
  );

  const appsItemThree = createElement("div", "item", "");
  const itemThreeName = createElement("h4", "", "CHICKEN TENDERS");
  const itemThreePrice = createElement("span", "price", "6.50");
  const itemThreeDes = createElement(
    "span",
    "description",
    "Three pieces of white meat, breaded, with a sampling of our in-house sauces",
  );

  const appsItemFour = createElement("div", "item", "");
  const itemFourName = createElement("h4", "", "ONION RINGS");
  const itemFourPrice = createElement("span", "price", "4.50");
  const itemFourDes = createElement(
    "span",
    "description",
    "Deep fried until golden",
  );

  const appsItemFive = createElement("div", "item", "");
  const itemFiveName = createElement("h4", "", "BREADED ZUCCHINI PLANKS");
  const itemFivePrice = createElement("span", "price", "5.50");
  const itemFiveDes = createElement("span", "description", "With marinara");

  const appsItemSix = createElement("div", "item", "");
  const itemSixName = createElement("h4", "", "CHEESY BREAD STICKS");
  const itemSixPrice = createElement("span", "price", "5.50");
  const itemSixDes = createElement(
    "span",
    "description",
    "Focaccia breadsticks tapped with parmesan, sea salt, and rosemary",
  );

  const pizza = createElement("div", "pizza", "");

  const pizzaHead = createElement("h4", "", "PIZZA");

  const pizzaItemOne = createElement("div", "item", "");
  const PizzaOneItemName = createElement("h4", "", "CLASSIC CHEESE");
  const pizzaOneItemPrice = createElement("span", "price", "8.75");
  const pizzaOneItemDes = createElement(
    "span",
    "description",
    "Three-cheese blend with a zesty red sauce",
  );

  const pizzaItemTwo = createElement("div", "item", "");
  const PizzaItemTwoName = createElement("h4", "", "MEXICAN");
  const pizzaItemTwoPrice = createElement("span", "price", "12.75");
  const pizzaItemTwoDes = createElement(
    "span",
    "description",
    "Refried beans, red sauce, onion, pepper, mushroom, broccoli, and spicy pork",
  );

  const pizzaItemThree = createElement("div", "item", "");
  const pizzaThreeItemName = createElement("h4", "", "PIZZA POBLANA");
  const pizzaThreeItemPrice = createElement("span", "price", "12.75");
  const pizzaThreeItemDes = createElement(
    "span",
    "description",
    "Grilled chicken or beef or spicy pork, red pepper, onion, and chipotle sauce",
  );

  const pizzaItemFour = createElement("div", "item", "");
  const pizzaFourItemName = createElement("h4", "", "WHITE PIZZA");
  const pizzaFourItemPrice = createElement("span", "price", "8.75");
  const pizzaFourItemDes = createElement(
    "span",
    "description",
    "pizzaFiveItemPrice",
  );

  const pizzaItemFive = createElement("div", "item", "");
  const pizzaFiveItemName = createElement("h4", "", "TOMATO BASIL");
  const pizzaFiveItemPrice = createElement("span", "price", "8.50");
  const pizzaFiveItemDes = createElement(
    "span",
    "description",
    "Fresh tomato and basil, parmesan cheese, garlic and olive oil crust",
  );

  const pizzaItemSix = createElement("div", "item", "");
  const pizzaSixItemName = createElement("h4", "", "GREEK");
  const pizzaSixItemPrice = createElement("span", "price", "9.75");
  const pizzaSixItemDes = createElement(
    "span",
    "description",
    "Olives, feta cheese, tomatoes, and green peppers",
  );

  const pizzaItemSeven = createElement("div", "item", "");
  const pizzaSevenItemName = createElement("h4", "", "VEGGIE LOVERS");
  const pizzaSevenItemPrice = createElement("span", "price", "11.75");
  const pizzaSevenItemDes = createElement(
    "span",
    "description",
    "Broccoli, onion, tomato, olives, mushrooms, and green peppers",
  );

  const pizzaItemEight = createElement("div", "item", "");
  const pizzaEightItemName = createElement("h4", "", "BUFFALO CHICKEN");
  const pizzaEightItemPrice = createElement("span", "price", "13.75");
  const pizzaEightItemDes = createElement(
    "span",
    "description",
    "Chicken, Buffalo sauce, bleu cheese, and Tabasco",
  );

  const pizzaItemNine = createElement("div", "item", "");
  const pizzaNineItemName = createElement("h4", "", "BBQ CHICKEN");
  const pizzaNineItemPrice = createElement("span", "price", "13.75");
  const pizzaNineItemDes = createElement(
    "span",
    "description",
    "BBQ chicken, and bacon",
  );

  const pizzaItemTen = createElement("div", "item", "");
  const pizzaTenItemName = createElement("h4", "", "MEAT LOVERS");
  const pizzaTenItemPrice = createElement("span", "price", "14.75");
  const pizzaTenItemDes = createElement(
    "span",
    "description",
    "Sausage, meatballs, pepperoni, ham, and bacon",
  );

  const pizzaItemEleven = createElement("div", "item", "");
  const pizzaElevenItemName = createElement("h4", "", "THE WORKS");
  const pizzaElevenItemPrice = createElement("span", "price", "14.75");
  const pizzaElevenItemDes = createElement(
    "span",
    "description",
    "Sausage, meatball, pepperoni, mushroom, onion, tomatoes, and peppers",
  );

  const pizzaItemTwelve = createElement("div", "item", "");
  const pizzaTwelveItemName = createElement("h4", "", "CHEESESTEAK 'ZA");
  const pizzaTwelveItemPrice = createElement("span", "price", "15.25");
  const pizzaTwelveItemDes = createElement(
    "span",
    "description",
    "Shaved steak, peppers, onions and mushrooms with ranch dressing",
  );

  content.append(apps, pizza);

  apps.append(
    appsHead,
    appsItemOne,
    appsItemTwo,
    appsItemThree,
    appsItemFour,
    appsItemFive,
    appsItemSix,
  );

  pizza.append(
    pizzaHead,
    pizzaItemOne,
    pizzaItemTwo,
    pizzaItemThree,
    pizzaItemFour,
    pizzaItemFive,
    pizzaItemSix,
    pizzaItemSeven,
    pizzaItemEight,
    pizzaItemNine,
    pizzaItemTen,
    pizzaItemEleven,
    pizzaItemTwelve,
  );

  appsItemOne.append(itemOneName, itemOnePrice, itemOneDes);
  appsItemTwo.append(itemTwoName, itemTwoPrice, itemTwoDes);
  appsItemThree.append(itemThreeName, itemThreePrice, itemThreeDes);
  appsItemFour.append(itemFourName, itemFourPrice, itemFourDes);
  appsItemFive.append(itemFiveName, itemFivePrice, itemFiveDes);
  appsItemSix.append(itemSixName, itemSixPrice, itemSixDes);

  pizzaItemOne.append(PizzaOneItemName, pizzaOneItemPrice, pizzaOneItemDes);
  pizzaItemTwo.append(PizzaItemTwoName, pizzaItemTwoPrice, pizzaItemTwoDes);
  pizzaItemThree.append(
    pizzaThreeItemName,
    pizzaThreeItemPrice,
    pizzaThreeItemDes,
  );
  pizzaItemFour.append(pizzaFourItemName, pizzaFourItemPrice, pizzaFourItemDes);
  pizzaItemFive.append(pizzaFiveItemName, pizzaFiveItemPrice, pizzaFiveItemDes);
  pizzaItemSix.append(pizzaSixItemName, pizzaSixItemPrice, pizzaSixItemDes);
  pizzaItemSeven.append(
    pizzaSevenItemName,
    pizzaSevenItemPrice,
    pizzaSevenItemDes,
  );
  pizzaItemEight.append(
    pizzaEightItemName,
    pizzaEightItemPrice,
    pizzaEightItemDes,
  );
  pizzaItemNine.append(pizzaNineItemName, pizzaNineItemPrice, pizzaNineItemDes);
  pizzaItemTen.append(pizzaTenItemName, pizzaTenItemPrice, pizzaTenItemDes);
  pizzaItemEleven.append(
    pizzaElevenItemName,
    pizzaElevenItemPrice,
    pizzaElevenItemDes,
  );
  pizzaItemTwelve.append(
    pizzaTwelveItemName,
    pizzaTwelveItemPrice,
    pizzaTwelveItemDes,
  );
}

export { menuContent };
