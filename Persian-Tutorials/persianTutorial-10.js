///// More of loops /////

let p = 0;

while (p < 20) {
  p++;

  if (p == 10) {
    continue; // continue skips the rest of the code in the loop and goes to the next iteration
  }

  if (p % 2 === 0) {
    console.log(p);
  }
}

/// /// /// /// /// ///

let h = 0;

do {
  h++;

  if (h == 10) {
    break; // break skips the rest of the code in the loop and goes to the next iteration
  }

  if (h % 2 === 0) {
    console.log(h);
  }
} while (h < 20);

/// /// /// /// /// ///

let f = 0;

for (let f = 0; f < 30; f++) {
  if (f == 10) {
    continue; // continue skips the rest of the code in the loop and goes to the next iteration
  }

  if (f == 21) {
    break; // break skips the rest of the code in the loop and goes to the next iteration
  }

  console.log(f + 0.5);
}

///// Mini Project /////

let n = 10000000000109;
let isPrime = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}

console.log(n, isPrime);

/// /// /// /// /// ///

let n2 = 1000000007;
let i = 2;
let isPrime2 = true;

while (i < parseInt(n2 ** 0.5) + 1) {
  if (n2 % i == 0) {
    isPrime2 = false;
    break;
  }
  i++;
}

console.log(n2, isPrime2);

///// Functions /////

// Function declaration

function add1(a, b, c) {
  console.log("Answer: " + (a + b - c));
}

add1(8, 8, 1);

// Function expression

let add2 = function (a, b) {
  console.log(`Answer: ${a} * ${b}`);
};

add2(8, 8);

// Arrow Function

let add3 = (a, b, c) => console.log("Answer: " + a ** b + c);
add3(8, 8, 5);

let addWithFive = (v) => v + 5;
console.log(addWithFive(5));

///// Objects /////

let Hoodi = {
  fname: "Hoodad",
  lname: "Hoffman",
  age: 28,
  isMarried: true,
  friends: ["Jane", "Mark", "Bob"],
  fullname() {
    return `${this.fname} ${this.lname}`;
  },
  sayHi() {
    console.log(`Hello, my new name is ${this.fullname()}!`);
  },
  showFriends() {
    return `my friends are ${this.friends.join(" - ")}`; // join() is a method that joins the array elements with a separator
  },
};
console.log(Hoodi.fullname()); // Hoodad Hoffman
Hoodi.sayHi(); // Hello, my new name is Hoodad Hoffman!
console.log(Hoodi.showFriends()); // my friends are Jane - Mark - Bob

/// /// /// /// /// ///

let articles = [
  {
    title: "My First Title!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magni obcaecati maxime incidunt laborum laudantium beatae, eius et quaerat cumque ipsa, voluptates veritatis odio? Harum dolores doloremque quas voluptates laboriosam?",
    views: 1000,
  },
  {
    title: "My Second Title!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magni obcaecati maxime incidunt laborum laudantium beatae, eius et quaerat cumque ipsa, voluptates veritatis odio? Harum dolores doloremque quas voluptates laboriosam?",
    views: 400,
  },
  {
    title: "My Third Title!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magni obcaecati maxime incidunt laborum laudantium beatae, eius et quaerat cumque ipsa, voluptates veritatis odio? Harum dolores doloremque quas voluptates laboriosam?",
    views: 8000,
  },
];

articles.forEach((article) => {
  console.log(article.title);
  console.log(article.description);
  console.log("Views: " + article.views + "K");
  console.log("--------------------");
});

///// Javascript Built-In Objects /////

console.log(Number.EPSILON); // smallest number that can be added to 1 to be greater than 1
console.log(Number.MAX_SAFE_INTEGER); // largest safe integer
console.log(Number.MAX_VALUE); // largest number
console.log(Number.MAX_VALUE * 2); // largest number * 2 (overflow) - Infinity
console.log(Math.E);
console.log(Math.PI);

let student = {
  name: "John",
  point: 20,
  age: 30,
  isMarried: false,
};

console.log(JSON.stringify(student)); // converts the object to a string
// {"name":"John","point":20,"age":30,"isMarried":false}

// Continue ...