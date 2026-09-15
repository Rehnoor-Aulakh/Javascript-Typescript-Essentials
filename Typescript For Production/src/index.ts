class User {
    email: string;
    name: string;
    readonly city: string;
    constructor(email: string, name: string, city:string) {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}

const rehnoor = new User("rehnoor@gmail.com", "Rehnoor Aulakh", "Patiala");
