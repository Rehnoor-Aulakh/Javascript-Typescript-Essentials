interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrial: ()=> string,
    getCoupon?(couponName: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const rehnoor: Admin = {
    dbId: 22,
    role: "admin",
    email: "rehnoor@example.com",
    userId: 1122,
    startTrial: ()=> ("Trial Started"),
    getCoupon: (name:"rehnoor", off: 1 ) => {
        return 10
    },
    githubToken: "github"
}

rehnoor.email = "rehnoor@rehnoor.com"