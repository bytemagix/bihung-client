import { mockSearchData } from "./mockData";

const searchOptions = Object.keys(mockSearchData);

/**
 *
 * @param {String} keyword
 */
export function search(keyword) {
  return searchOptions
    .filter((item) => item.startsWith(keyword))
    .map((key) => ({ key: key, definition: mockSearchData[key].definition }));
}
