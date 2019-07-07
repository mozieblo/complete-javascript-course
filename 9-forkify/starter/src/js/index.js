import Search from './modules/Search';
import Recipe from './modules/Recipe';
import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';


const state = {};

//SEARCH CONTROLLER

const controlSearch = async () => {

    const query = searchView.getInput();


    if(query){

        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);


        try {
            await state.search.getResults();

            clearLoader();

            searchView.renderResoults(state.search.recipes);
        } catch (err) {
            alert('Something went wrong with search...');
            clearLoader();
        }
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

// RECIPE CONTROLLER

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');

    if (id) {

        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        if (state.search) searchView.highlightSelected(id);

        state.recipe = new Recipe(id);

        try {
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();


            state.recipe.calcTime();
            state.recipe.calcServings();


            clearLoader();
            recipeView.renderRecipe(state.recipe);


        } catch (err) {
            console.log(err);
            alert('Error processing recipe!');
        }
    }
    console.log(state.recipe);
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {

        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);

        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {

        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);

    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {


    } else if (e.target.matches('.recipe__love, .recipe__love *')) {


    }
});
