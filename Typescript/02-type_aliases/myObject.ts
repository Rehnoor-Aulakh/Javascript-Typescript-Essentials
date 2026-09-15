const User = {
    name: "Rehnoor Aulakh",
    age: 21,
    isActive: true
}

function createUser({name, isPaid}: {name: string, isPaid: boolean}): {name: string, isPaid:boolean} {
    return {name, isPaid};
}

createUser({name: "Rehnoor Aulakh", isPaid: true});


export {}