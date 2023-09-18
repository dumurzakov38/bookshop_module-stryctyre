import { updateIndex, dataInfo, btnArchitecture, containerResultBooks } from './defaultScrip';

export function getClickGetNameKategory () {
  btnArchitecture.forEach(li => {
    li.addEventListener('click', event => {
      updateIndex(0);
      while (containerResultBooks.firstChild) {
        containerResultBooks.removeChild(containerResultBooks.firstChild);
      }
      dataInfo = li.getAttribute('data-info');
      doSomethingWithDataInfo(dataInfo);
      requestBook(dataInfo, index);
    });
  });
}