// class User {
//     public email: string;
//     public name: string;
//     private readonly city: string;
//     constructor(email: string, name: string, city:string) {
//         this.email = email;
//         this.name = name;
//         this.city = city;
//     }
// }

class User {

    protected _courseCount = 1;

    constructor(public email: string, public name: string, private readonly city: string) {
        this.email = email;
        this.name = name;
        this.city = city;
    }

    private deleteToken() {
        console.log("Token deleted");
    }

    // in typescript the getters and setters have the keyword get and set unlike java

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNumber: number) {
        if(courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        } 
        this._courseCount= courseNumber;
    } 
}

class SubUser extends User  {
    isFamily: boolean = true;
    
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const rehnoor = new User("rehnoor@gmail.com", "Rehnoor Aulakh", "Patiala");
