// const user: string[] = ['hc']

let user:[string , number, boolean]

user = ["rehnoor", 21, true]

let rgb:[number, number, number] = [255, 123, 112]

// tuple with opacity
let rgbo:[number,number, number, number] = [255, 123, 112, 255]

// like in an api call if the User comes in as id, and email
type User4 = [number, string]

const newUser: User4 = [1, "r@gmail.com"]

newUser[1]= "r@r.com";

// now typescript can catch tuple type error, previous versions were not possible
// newUser.push(true);