import uniqid from 'uniqid';

export default class List{
    constructor(){
        this.items = [];
    }

    addItem(count, unit, ingredient){
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        };
        this.items.push(item);
        return item;
    }

    deleteItem (id){
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index,1);
        //array[2,6,4] splice(1,2) --> return 6,4 array [2]
        //array[2,6,4] slice(1,2) --> return 6 array [2,6,4]
    }

    updateCount(id, newCount){
        this.items.find(el =>el.id === id).count = newCount;
    }
}