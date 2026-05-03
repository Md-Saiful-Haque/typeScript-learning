"use strict";
// spread operator
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Sadman", "Saikat"];
const schoolFrnd = ["montu", "pontu"];
const collegeFrnd = ["Safwan", "Rafsaan"];
friends.push(...schoolFrnd);
console.log(friends);
const user = {
    name: 'Saiful',
    phoneNumber: '01600000000'
};
const otherInfo = {
    hobby: 'Outing',
    favouriteColor: 'Black'
};
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);
// rest operator
const sentInvite = (...friends) => {
    friends.forEach((friend) => console.log(`sent invitation to ${friend}`));
};
sentInvite("Ramim", "Erfat", "Sakid", "Sadid");
//# sourceMappingURL=spreadAndRest.js.map