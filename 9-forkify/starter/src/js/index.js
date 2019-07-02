/*import str from './modules/Search';
import {add as w, multiply as r, ID} from './views/searchView';

import * as searchView from './views/searchView';

console.log(`Using ${str} and add exportet ${searchView.add(searchView.ID,5)} lalalla ${searchView.multiply(3,5)}`);




*/
import Search from './modules/Search';
import {elements} from './views/base';
import * as searchView from './views/searchView';

const state = {};

const controlSearch = async () => {

    const query = searchView.getInput();


    if(query){

        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();


        await state.search.getResults();



        searchView.renderResoults(state.search.recipes);


    }


};


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});






