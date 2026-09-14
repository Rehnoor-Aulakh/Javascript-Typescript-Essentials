const User = {
    name: "Rehnoor Aulakh",
    age: 21,
    isActive: true
};
function createUser({ name, isPaid }) {
    return { name, isPaid };
}
createUser({ name: "Rehnoor Aulakh", isPaid: true });
export {};
