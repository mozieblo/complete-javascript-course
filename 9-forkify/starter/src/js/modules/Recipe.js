import axios from "axios";

mport axios from 'axios';
import {proxy, key} from '../config';

export default class Recipe {
    constructor (id) {
        this.id = id;
    }

    async getRecipe(){
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
        } catch (error){
            alert(error);
        }
    }
}