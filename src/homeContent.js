import roofTop from "/images/Le-Rooftop.jpg";
import phoneSVG from "/images/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function contents() {
  const content = document.querySelector("#content");

  function createElement(tag, className, text) {
    let element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (text) element.textContent = text;
    return element;
  }

  const headImg = createElement("img");
  const restaurant = createElement("span", "", "Fake restaurant");
  const head = createElement(
    "h1",
    "",
    "Lorem ipsum dolor sit amet consectetur elit!",
  );
  const description = createElement(
    "p",
    "",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitiaconsequuntur dignissimos, quos repellendus consectetur accusamus,ducimus nihil officia deleniti soluta cupiditate blanditiis architectoperferendis ea eligendi adipisci maxime molestiae dolorum!",
  );
  const info = createElement("div", "info");
  const openHours = createElement("div");
  const hoursSpans = createElement("span", "", "Hours: ");
  const hoursList = createElement("ol");
  const weekDayList = createElement(
    "list",
    "",
    "MONDAY TO SATURDAY: 6AM - 6PM",
  );
  const weekEndList = createElement("li", "", "SUNDAY: 8AM - 8PM");
  const contact = createElement("div", "contact");
  const phoneImg = createElement("img", "callSVG");
  const phone = createElement("span", "", "00 55 55 55 55");

  headImg.src = roofTop;
  phoneImg.src = phoneSVG;

  content.append(headImg, restaurant, head, description, info);

  info.append(openHours, hoursSpans, hoursList, contact);
  hoursList.append(weekDayList, weekEndList);
  contact.append(phoneImg, phone);
}
export { contents };
