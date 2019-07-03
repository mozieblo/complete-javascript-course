import Search from './modules/Search';
import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';

const state = {};

const controlSearch = async () => {

    const query = searchView.getInput();


    if(query){

        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);


        await state.search.getResults();

        clearLoader();

        searchView.renderResoults(state.search.recipes);


    }


};


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResoults(state.search.recipes, goToPage);
    }
});





