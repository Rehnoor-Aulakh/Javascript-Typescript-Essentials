type User1 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
};

let myUser: User1 = {
    _id: "12345",
    name: "Rehnoor Aulakh",
    email: "r@r.com",
    isActive: true
};

myUser.email = "r@gmail.com";

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}