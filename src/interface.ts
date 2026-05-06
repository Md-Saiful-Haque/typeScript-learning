type User = {
    name: string;
    age: number
}

// --------------------------------------- //

// TODO : interface worked with only non-primitive data type
// interface => object type : arrey, object, function

interface IUser {
    name: string;
    age: number
}

// --------------------------------------- //

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
    role: 'admin' | 'user'
}

const user1: UserWithRole = {
    name : 'Mr. X',
    age: 80,
    role: 'admin'
}

const user2: IUser = {
    name : 'Mr. Y',
    age: 85,
}

const user3: IUserWithRole = {
    name : 'Mr. Z',
    age: 83,
    role: 'admin'
}

// function by type alias

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2

type Friends = string[];

const freinds: Friends = ["A", "B", "C"];

// -------------------- //
interface IFriend {
  [index: number]: string;
}

const freind: IFriend = ["A", "B", "C"];
// -------------------- //


// function by type interface
interface IAdd {
  (num1: number, num2: number): number;
}

const add1: IAdd = (num1, num2) => num1 + num2;
