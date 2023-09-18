import { getClickMoreResul } from './getClickMoreResulScrip';
import { dataInfo, index } from './defaultScrip';
import { recordIdArray } from './recordIdArrayScrip';

export async function moreResul() {
  index += 6;
  await requestBook(dataInfo, index);
  recordIdArray();
}