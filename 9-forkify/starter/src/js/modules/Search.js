import axios from 'axios';

export default class Search {
    constructor (query){
        this.query = query;
    }

    async getResults(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'ba6567bdb19f8c193cf5acba96f763b1';
        try {
            const res = await axios (`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.recipes = res.data.recipes;
            //console.log(this.recipes);
        } catch (error){
            alert(error);
        }
    }
}

