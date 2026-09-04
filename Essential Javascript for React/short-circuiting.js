console.log(true && "Hello world");

console.log(false && "Hello world");

// falsy values ->  0, null, undefined, false, Nan, empty string
console.log("rehnoor" && "some other string");
console.log(0 && "some");
console.log("" && "some");

console.log(true || "Hello world");
console.log(false || "Hello world");

// nullish coalescing operator -> false for only null and undefined
console.log(null ?? "Hello world");
console.log(undefined ?? "Hello world");
console.log(false ?? "Hello world");
console.log(0 ?? "Hello world");

