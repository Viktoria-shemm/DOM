
const item = document.querySelectorAll(".item");

item[4].before(item[0]);

const itemFour = item[2].querySelector(".props__list .props__item_four");
const itemFourBefore = item[0].querySelector(".props__list .props__item_four:nth-child(4)");

itemFourBefore.before(itemFour);

const propsListWithIndexFive = item[3].querySelector(".props__list");
const propsListWithIndexThree = item[4].querySelector(".props__list");

propsListWithIndexFive.remove();
propsListWithIndexThree.remove();

const itemTitleThree = item[3].querySelector(".item__title");
const itemTitleFive = item[4].querySelector(".item__title");

itemTitleThree.after(propsListWithIndexThree);
itemTitleFive.after(propsListWithIndexFive);

const itemTwo = item[5].querySelectorAll(".props__list .props__item_two");
const itemTwoWithIndexZero = itemTwo[0];
const itemTwoWithIndexOne = itemTwo[1];
const itemTwoAppend = item[2].querySelector(".props__list");

itemTwoAppend.append(itemTwoWithIndexZero);
itemTwoAppend.append(itemTwoWithIndexOne);

const advertising = document.querySelector(".ads");
advertising.remove();

