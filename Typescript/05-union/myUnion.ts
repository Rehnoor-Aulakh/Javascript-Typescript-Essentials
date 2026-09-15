let score:number | string = 33;

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let rehnoor: User | Admin = {
    name: "Rehnoor", 
    id: 101,

}

rehnoor = {
    username: "ra", 
    id: 101,
}