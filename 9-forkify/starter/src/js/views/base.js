import {elementStrings} from "../../../../final/src/js/views/base";

export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),

};

const elementsStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
            <div class="${elementsStrings.loader}">
                <svg>
                    <use href="/img/icons.svg#icon-cw"></use>
                </svg>
            </div>
       `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementsStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};