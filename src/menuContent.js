import pizzaImage from "/images/Pizza-img.jpg";
function menuContent() {
  const content = document.querySelector("#content");

  function createElement(tag, className, text) {
    let element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (text) element.textContent = text;
    return element;
  }

  class Item {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
    itemName() {
      return createElement("h4", "", this.name);
    }
    itemPrice() {
      return createElement("span", "price", this.price);
    }
    itemDescription() {
      return createElement("span", "description", this.description);
    }
  }
  const pizza = [
    new Item(
      "CLASSIC CHEESE",
      "8.75",
      "Three-cheese blend with a zesty red sauce",
    ),

    new Item(
      "MEXICAN",
      "75",
      "Refried beans, red sauce, onion, pepper, mushroom, broccoli, and spicy pork",
    ),
    new Item(
      "PIZZA POBLANA",
      "12.75",
      "Grilled chicken or beef or spicy pork, red pepper, onion, and chipotle sauce",
    ),
    new Item(
      "WHITE PIZZA",
      "8.75",
      "Mozzarella , nicatta, parmesan cheeses, garlic, and olive oil crust",
    ),
    new Item(
      "TOMATO BASIL",
      "8.50",
      "Fresh tomato and basil, parmesan cheese, garlic and olive oil crust",
    ),
    new Item(
      "GREEK",
      "9.75",
      "Olives, feta cheese, tomatoes, and green peppers",
    ),
    new Item(
      "VEGGIE LOVERS",
      "11.75",
      "Broccoli, onion, tomato, olives, mushrooms, and green peppers",
    ),
    new Item(
      "BUFFALO CHICKEN",
      "13.75",
      "Chicken, Buffalo sauce, bleu cheese, and Tabasco",
    ),
    new Item("BBQ CHICKEN", "13.75", "BBQ chicken, and bacon"),
    new Item(
      "MEAT LOVERS",
      "14.75",
      "Sausage, meatballs, pepperoni, ham, and bacon",
    ),
    new Item(
      "THE WORKS",
      "4.75",
      "Sausage, meatball, pepperoni, mushroom, onion, tomatoes, and peppers",
    ),
    new Item(
      "CHEESESTEAK 'ZA",
      "15.25",
      "Shaved steak, peppers, onions and mushrooms with ranch dressing",
    ),
  ];
  const apps = [
    new Item("SMALL HAND-CUT FRIES", "5.50", "With cheese and/or beef"),
    new Item("SWEET POTATO FRIES", "4.50", "Small, topped with brown sugar"),
    new Item(
      "CHICKEN TENDERS",
      "6.50",
      "Three pieces of white meat, breaded, with a sampling of our in-house sauces",
    ),
    new Item("ONION RINGS", "4.50", "Deep fried until golden"),
    new Item("BREADED ZUCCHINI PLANKS", "5.50", "With marinara"),
    new Item(
      "CHEESY BREAD STICKS",
      "5.50",
      "Focaccia breadsticks tapped with parmesan, sea salt, and rosemary",
    ),
  ];
  //   (function () {
  //     apps.push(new Item("","",""));
  //   });

  //   (function () {
  //     pizza.push(new Item("","",""));
  //   })();
  const container = createElement("div", "menuContainer", "");
  const appsDiv = createElement("div", "apps", "");
  const appsHead = createElement("h2", "", "APPS");
  const pizzaDiv = createElement("div", "pizza", "");
  const pizzaHead = createElement("h2", "", "PIZZA");
  const pizzaImga = createElement("img","menuPagePizzaImage")
  pizzaImga.src = pizzaImage;

  content.append(container);
  container.append(appsDiv, pizzaDiv);
  appsDiv.append(appsHead, pizzaImga);
  pizzaDiv.append(pizzaHead);

  (function appsAppend() {
    apps.forEach((item) => {
      const itemDiv = createElement("div", "item", "");
      appsDiv.append(itemDiv);
      itemDiv.append(item.itemName(), item.itemPrice(), item.itemDescription());
    });
  })();
  (function pizzaAppend() {
    pizza.forEach((item) => {
      const itemDiv = createElement("div", "item", "");
      pizzaDiv.append(itemDiv);
      itemDiv.append(item.itemName(), item.itemPrice(), item.itemDescription());
    });
  })();
}
export { menuContent };
