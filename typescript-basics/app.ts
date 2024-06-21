//// TYPESCRIPT AUTOMATICALLY ASSIGNS A TYPE WHEN YOU DEFINE A VARIABLE
let variable = "hello world";

// variable = true
variable = "hi";

let age = 22;

// age="twenty two"
age = 29;

//// EXPLICITLY PROVIDING A TYPE
let ageWithType: number = 22;

// ageWithType = "twenty two"
ageWithType = 34;

//// BASIC TYPES
let testString: string;

testString = "hello";

let testBoolean: boolean;

testBoolean = false;

//// MULTIPLE TYPES (UNION TYPES)
let testStringOrNumber: string | number;

testStringOrNumber = "16";
testStringOrNumber = 16;
// testStringOrNumber = []

//// ARRAYS
let names = ["Talha", "T", "O"];

// names.push(true)
names.push("Ozbek");

let numbers = [22, 11, 30];

// numbers.push(true)
numbers.push(20);

let testStringArray: string[];

// testStringArray = [1, 2, 3]
testStringArray = ["Hello", "World"];

let testNumberArray: number[];

// testNumberArray = [22, "World", true]
testNumberArray = [1, 8, 5];

let testStringOrNumberArray: (string | number)[];

// testStringOrNumberArray = [12, "Test", true]
testStringOrNumberArray = [12, "Test", 55];

//// OBJECTS
let user = {
  username: "Talha",
  age: 22,
  isAdmin: false,
};

// user.username = 22
user.username = "Ozbek";

// user.age = "eighteen"
user.age = 10;

// user.isAdmin = "no"
user.isAdmin = true;

// user.phoneNumber = +123456789

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "T",
  age: 28,
  isAdmin: true,
  //   phone: +121232341324
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "Ozbek",
  age: 18,
  isAdmin: false,
  phone: "+123234124",
};

//// ANY TYPES
let testAny: any;

testAny = "Hello";
testAny = 22;
testAny = true;
testAny = [];
testAny = {};

let testAnyArray: any[];

testAnyArray = [4, "hop", true, {}];

//// FUNCTIONS
let sayHi = () => {
  console.log("Hello");
};

// sayHi = "hi"

let funcReturnString = (): string => {
  return "String";
};

let multiple = (num: number) => {
  return num * 2;
};
let multiple2 = (num: number): number => {
  return num * 2;
};
let multiple3 = (num: number): void => {
  // return num * 2
  //Do sth but don't return
};

let sum = (num: number, num2: number, another?: number) => {
  return num + num2;
};

sum(4, 8);

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
  return user.age;
};

//// TYPE ALIASES
type UserType = {
  username: string;
  age: number;
  phone: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

//FUNCTION SIGNATURES
type myFunc = (a: number, b: number) => void;

let write: myFunc = (num, str) => {
  console.log(num + " times " + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

let userWithTheme: UserType2 = {
  username: "T",
  age: 23,
  phone: "12313123123",
  // theme: "pink"
  theme: "dark",
};

//// INTERFACES
// Be aware no equal sign
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeID: number;
}

const emp: IEmployee = {
  username: "Talha",
  email: "talha@gmail.com",
  age: 12,
  employeeID: 4,
};

const client: IUser = {
  username: "Hope",
  email: "hope@gmail.com",
  age: 25,
};

//// GENERICS
interface IAuther {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuther[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: "Test",
  desc: "post desc",
  extra: ["string", "string2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<{ id: number; username: string }> = {
  id: 1,
  title: "Test",
  desc: "post desc",
  extra: [{ id: 29, username: "string2" }],
};

const testMe3: IPostEvenBetter<IAuther> = {
  id: 2,
  title: "Title",
  desc: "post desc",
  extra: [{ id: 2, username: "hope" }],
};

const testMe4: IPostEvenBetter<ICategory> = {
  id: 2,
  title: "Title",
  desc: "post desc",
  extra: [{ id: 4, title: "Title" }],
};
