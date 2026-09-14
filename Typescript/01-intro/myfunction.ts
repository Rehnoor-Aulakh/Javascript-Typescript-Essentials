function addTwo(num:number) {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

addTwo(5); 

const heros = [1, "thor", "spiderman"];

heros.map(hero => {
    return `hero is ${hero}`;
})