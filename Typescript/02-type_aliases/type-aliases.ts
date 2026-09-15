type User3 = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User3) : User3 {
    // does some operations like writing to database
    // and returns the user
    
    return {name: user.name, email: user.email, isActive: user.isActive}
}

createUser({name: "Rehnoor", email: "r@r.com", isActive: true});;

