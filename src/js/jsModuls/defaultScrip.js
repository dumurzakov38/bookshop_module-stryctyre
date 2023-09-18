// Получение элементов DOM
export const btnArchitecture = document.querySelectorAll('.book__katalog__categories__container ul li h1');
export const moreResultBtn = document.querySelector('.book__katalog__result__moreBtn');
export const containerResultBooks = document.querySelector('.book__katalog__result__books');

export const HtmlElementbasket = document.querySelector('.nav__functional-basket');
export const HtmlElementbasketTitle = document.querySelector('.basket');

import { moreResul } from './moreResulScrip';
import { getClickAddDel } from './getClickAddDelScrip';
// Дефолтные значения
let index = 0;
export function updateIndex(newIndex) {
  index = newIndex;
}
export { index };
export let dataInfo = "Architecture";
export let valueslocalStorage = JSON.parse(localStorage.getItem('Basket')) || [];
export let recordIdArray;

import { defaultAnimation } from './defaultAnimationScrip';
import { defaultSlider } from './defaultSliderScrip';
import { getClickGetNameKategory } from './getClickGetNameKategoryScrip';
import { getClickMoreResul } from './getClickMoreResulScrip';
import { requestBook } from './requestBookScrip';
import { doSomethingWithDataInfo } from './doSomethingWithDataInfoScrip';
import { updateBasketDisplay } from './updateBasketDisplayScrip';
import { addDelBookBasket } from './addDelBookBasketScrip';

// Функция, которая будет выполняться при загрузке страницы
async function defaultScript() {
  defaultAnimation();
  defaultSlider();
  getClickGetNameKategory();
  getClickMoreResul();
  await requestBook(dataInfo, index);
  doSomethingWithDataInfo(dataInfo);
  updateBasketDisplay();
  addDelBookBasket();
}

// Запуск дефолтных функций
defaultScript();