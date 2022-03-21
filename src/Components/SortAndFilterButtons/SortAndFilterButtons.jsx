import styled from 'styled-components'
import { Main } from '../../style';
export const SortAndFilterButtons = ({ handleSort }) => {
  
  return (
    <Main className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
      <button className="sortByTitleAsc">sortByTitleAsc</button>
      <button className="sortByTitleDesc">sortByTitleDesc</button>
      <button className="sortByPriceAsc">sortByPriceAsc</button>
      <button className="sortByPriceDesc">sortByPriceDesc</button>
    </Main>
  );
};
