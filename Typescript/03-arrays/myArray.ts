
// this is one way to define an array of type string in typescript
const superHeros:string[] = []

// another method is the generic type method inherited from java

const heroPowers:Array<number> = [] 

type User2 = {
    name: string;
    isActive: boolean;
}

const allUsers: User2[] = [];

allUsers.push({name: "Alice", isActive: true})

const MLModels: number[][] = [
    [255,255,255],
    [0,0,0],
]