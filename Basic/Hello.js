var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ========== TypeScript Basics ==========
console.log("TypeScript Basics");
var Welcome = "PAH PROGRAMMER";
var experience = 1.5;
console.log("Welcome to", Welcome, "and my experience in this field since", experience, "years");
// ========== Type Annotations ==========
console.log("Type Annotations");
var d = "Nibir";
d = "Hridoy";
console.log(d);
var dt; // যেহেতু টাইপ দিইনি, TypeScript এটাকে any ধরে নেয়
dt = "nine";
dt = 4;
console.log(dt + dt); // Output: 8
var stringnum = 46;
stringnum = "sd";
console.log(stringnum);
// ========== TypeScript Functions ==========
console.log("TypeScript Functions");
// Without type annotation
function say(personName) {
    console.log("Hi", personName);
}
say("hridoy");
say(10);
say(true);
// With type annotation
function saay(personName) {
    console.log("Hi", personName);
}
saay("hridoy");
// saay(10); // ❌ Error
// saay(true); // ❌ Error
function hello(personName, age) {
    console.log("Hi", personName, age);
}
hello("hridoy", 18);
// Addition Function
function addition(number1, number2) {
    console.log("Your total number is", number1 + number2);
}
addition(34, 35);
// Multiplication Function
function multiplication(number1, number2) {
    console.log("Your total number is", number1 * number2);
}
multiplication(5, 4);
// ========== TypeScript Object ==========
console.log("TypeScript object");
var teacher1 = {
    name: "Hridoy",
    age: 18,
    isReal: true,
};
var teacher2 = {
    name: "Nibir",
    age: 14,
    isReal: false,
};
console.log(teacher1, teacher2);
// ========== TypeScript Array ==========
console.log("TypeScript Array");
var array1 = []; // Number টাইপের খালি array
array1[0] = 55;
console.log(array1); // Output: [55]
array1.push(33);
console.log(array1); // Output: [55, 33]
var teacherNames = ["Hridoy", "Nibir"];
var teachersYears = [18, 14];
var teachersBoolean = [true, false];
console.log("Our teachers' names are", teacherNames, "and their ages are", teachersYears, "and their reality is", teachersBoolean);
var twod = [
    [1, 2, 3],
    [22, 33, 44],
    [222, 333, 444],
];
console.log(twod);
// ========== TypeScript Union ==========
console.log("TypeScript union");
var age;
age = 20;
age = "20";
age = true;
var ageArray = [1, 2, 3, "data", true];
console.log(ageArray);
var ageArray1 = ["res"];
console.log(ageArray1);
var ageArray2 = [1, 2, 3];
console.log(ageArray2);
// Literal type union
var day;
day = "saturday";
day = "sunday";
day = "monday";
// day = "friday"; // ❌ Error: not allowed
//typescript narrowing
console.log("typescript narrowing");
function saydetails(name, age) {
    console.log('My name is ', name, 'and My age is ', age);
}
saydetails("Hridoy", 27);
//typescript interfaces
console.log("typescript interfaces");
var pavel = {
    firstname: "pavel",
    middlename: "ahmmed",
    lastname: "Hridoy",
    age: 18,
    email: "pavelahmmedhridoy@gmail.com",
    gender: "Male",
    FullName: function () {
        return "".concat(this.firstname, "").concat(this.lastname, "");
    }
};
console.log(pavel);
console.log(pavel.FullName());
//extend
// কনসোল এ স্ট্রিং প্রিন্ট করবে
console.log('extend');
// pavell নামে একটা অবজেক্ট ডিফাইন করা হলো Employee টাইপ হিসেবে
var pavell = {
    firstname: "Pavel",
    middlename: "Ahmmed",
    lastname: "Hridoy",
    age: 18,
    email: "pavelahmmedhridoy@gmail.com",
    gender: "Male",
    experience: 1.5,
    // FullName মেথড ইমপ্লিমেন্ট করা হলো
    FullName: function () {
        // template literals ব্যবহার করে পুরো নাম তৈরি করা হয়েছে
        return "".concat(this.firstname, " ").concat(this.middlename, " ").concat(this.lastname);
    }
};
// পুরো অবজেক্ট কনসোলে প্রিন্ট করা হলো
console.log(pavell);
// FullName মেথড কল করে নাম প্রিন্ট করা হলো
console.log("Full Name:", pavell.FullName());
// ===== TypeScript Class =====
console.log("TypeScript class");
// Computer নামে একটা ক্লাস ডিফাইন করা হলো
var Computer = /** @class */ (function () {
    // constructor দিয়ে প্রপার্টি গুলো ইনিশিয়ালাইজ করা হচ্ছে
    function Computer(Ram, Name, ssd) {
        if (ssd === void 0) { ssd = 512; }
        this.Ram = Ram;
        this.Name = Name;
        this.ssd = ssd;
    }
    // getSpecs নামে একটা মেথড, যা কম্পিউটারের ডিটেইলস রিটার্ন করে
    Computer.prototype.getSpecs = function () {
        return "My Computer Name is ".concat(this.Name, ", RAM is ").concat(this.Ram, "GB, and SSD is ").concat(this.ssd, "GB.");
    };
    return Computer;
}());
// ক্লাস থেকে অবজেক্ট তৈরি করা হলো
var myComputer = new Computer(16, "HP");
// অবজেক্টের মেথড কল করে ডিটেইলস প্রিন্ট করা হলো
console.log(myComputer.getSpecs());
// Class implementing the interface
var Computer1 = /** @class */ (function () {
    function Computer1(Name, Ram) {
        this.Name = Name;
        this.Ram = Ram;
    }
    // 👉 এইখানে মেথডটি constructor-এর বাইরে লেখা হয়েছে
    Computer1.prototype.computerinfo = function () {
        console.log("Computer Name: ".concat(this.Name, ", RAM: ").concat(this.Ram, "GB"));
    };
    return Computer1;
}());
// 👉 এখন object তৈরি করে মেথড কল করতে হবে
var pc1 = new Computer1("Asus", 16);
pc1.computerinfo(); // Output: Computer Name: Asus, RAM: 16GB
// Create an instance of Computer1
var yourcomputer = new Computer1("Dell", 16);
yourcomputer.computerinfo();
//generics
console.log("generics");
function ageee(something) {
    return something;
}
console.log(ageee("ten"));
console.log(ageee(99));
console.log(ageee(true));
// Generic function: দুইটা object নেয় এবং merge করে
function obj(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// এখন আমরা দুইটা object পাঠাচ্ছি
var resu = obj({ name: "Hridoy", age: 18 }, { profession: "PAH PROGRAMMER" });
console.log(resu);
