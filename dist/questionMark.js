"use strict";
// ? : ternary opearator 
// ?? : nullish coalescing operator (// TODO : It's only work against null/undefined vlue)
// ?. optional chaining
Object.defineProperty(exports, "__esModule", { value: true });
const biyerAge = (age) => {
    // if(age >= 21) {
    //     console.log('you are eligible for biye')
    // }
    // else{
    //     console.log('you are not eligible for biye')
    // }
    const result = age >= 21 ? 'you are eligible for biye' : 'you are not eligible for biye';
};
biyerAge(21);
// nullish coalescing
const userTheme = null;
const selectedTheme = userTheme ?? "Light theme";
console.log(selectedTheme);
const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";
const resultWithNulish = isAuthenticated ?? '"You are guest !';
console.log({ resultWithTernary }, { resultWithNulish });
//optional chaining
const user = {
    address: {
        city: "Dhaka",
        town: "Banani",
    },
};
const postalCode = user?.address?.postalCode;
console.log(postalCode);
//# sourceMappingURL=questionMark.js.map