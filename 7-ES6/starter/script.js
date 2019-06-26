/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownElements {
    constructor (name, yearOfBuild){
        this.name = name;
        this.yearOfBuild = yearOfBuild;
    }
}

class Park extends TownElements {
    constructor (name, yearOfBuild, numOfTrees, parkArea){
        super (name, yearOfBuild);
        this.numOfTrees = numOfTrees;
        this.parkArea = parkArea;
    }

    densityPark(){
        let density = this.numOfTrees / this.parkArea;
        return density.toFixed(2);
    }

    agePark(){
        let age = new Date().getFullYear();
        age = age - this.yearOfBuild;
        return parseInt(age);
    }
}

class Street extends TownElements {
    constructor (name, yearOfBuild, lengthStreet, classification = 'normal'){
        super (name, yearOfBuild);
        this.lengthStreet = lengthStreet;
        this.classification = classification;
    }
}

const report = new Map();
report.set('park1', new Park('Fish Park', 1986, 500, 2000));
report.set('park2', new Park('Yellow Park', 1956, 1253, 4500));
report.set('park3', new Park('Rest Park', 2015, 55, 500));
report.set('street1', new Street('Magdalena Street', 1987, 4, 'big'));
report.set('street2', new Street('Lost Street', 2018, 0.5, 'small'));
report.set('street3', new Street('Boss Street', 1945, 2));
report.set('street4', new Street('Happy Street', 1999, 7, 'huge'));

report.forEach((value,key) => {
    if (key.includes('park')) {
        console.log(`In ${value.name} density of trees is ${value.densityPark()}.`);
        }
});
report.forEach((value,key) => {
    if (key.includes('park')) {
        var age, average;

        age = value.agePark();
        report.set('age' + key[4], age);

        average = parseInt((report.get('age1') + report.get('age2') + report.get('age3')) / 3);
        report.set('average', average);

        console.log(`Age of ${value.name} is ${age}.`);}
    if (!isNaN(average)){
        console.log(`Average of all parks in town is ${report.get('average')}.`);}
});
report.forEach((value,key) => {
    if (value.numOfTrees > 1000) {
        console.log(`${value.name} has more than 1000 trees.`)
    }
});

report.forEach((value,key) => {
    if (key.includes('street')){
        let average, averageL;
        averageL = value.lengthStreet;
        report.set('averageLen' + key[6], averageL);
        average = report.get('averageLen1') + report.get('averageLen2') + report.get('averageLen3') +report.get('averageLen4');
        if (!isNaN(average)){
            console.log(`Total average length of all towns street is ${average}.`)
        }
    }
});

report.forEach((value,key) => {
    if (key.includes('street')){
        console.log(`The ${value.name} is ${value.lengthStreet} km long.`);
    }
});

report.forEach((value,key) => {
    if (key.includes('street')){
        console.log(`${value.name} classification size is ${value.classification}.`)
    }
});