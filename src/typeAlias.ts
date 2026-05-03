type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string
  },
  gender: "male" | "female",
  contactNo: string,
  address: {
    division: string;
    city: string;
  };
}


const user1: User = {
    id : 123,
    name : {
        firstName: 'Saiful',
        lastName: 'Haque'
    },
    gender: 'male',
    contactNo: '0155555',
    address: {
        division: 'Chattogram',
        city: 'Chattogram'
    }
}


const user2: User = {
    id : 124,
    name : {
        firstName: 'Sabrina',
        lastName: 'Haque'
    },
    gender: 'female',
    contactNo: '016666',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    }
}


type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;

const myName: Name = "Me. X";

// function

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;