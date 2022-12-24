///// ASYNC AWAIT /////

const fs = require("fs");
const promisifiedReadfile = require("./promisifiedReadfile");

// Here we use fs.readfile() and callback functions:
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile("./file2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile("./file.txt", "utf-8")
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile("./file2.txt", "utf-8");
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  })
  .catch((err) => {
    console.log(err);
  });

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile("./file.txt", "utf-8");
  let secondSentence = await promisifiedReadfile("./file2.txt", "utf-8");
  console.log(firstSentence, secondSentence);
}

readFiles();

/// /// /// /// ///

function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});

async function withAsync(num) {
  if (num === 0) {
    return "zero";
  } else {
    return "not zero";
  }
}

withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});

/// /// /// /// ///

const brainstormDinner = require("./library.js");

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();

/// /// /// /// ///

const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`);
    setTimeout(() => {
      console.log("Should I make salad...?");
      setTimeout(() => {
        console.log("Should I make ramen...?");
        setTimeout(() => {
          console.log("Should I make eggs...?");
          setTimeout(() => {
            console.log("Should I make chicken...?");
            resolve("beans");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
};

module.exports = brainstormDinner;

/// /// /// /// ///

const shopForBeansx = require("./library.js");

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

const shopForBeansxx = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * beanTypes.length);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
};

module.exports = shopForBeans;

/// /// /// /// ///

const { shopForBeans2, soakTheBeans, cookTheBeans } = require("./library.js");

// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * 5);
      let beanType = beanTypes[randomIndex];
      console.log(`I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
};

let soakTheBeans = (beanType) => {
  return new Promise((resolve, reject) => {
    console.log("Time to soak the beans.");
    setTimeout(() => {
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
    }, 1000);
  });
};

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log("Time to cook the beans.");
    setTimeout(() => {
      if (isSoftened) {
        console.log("... The beans are cooked!");
        resolve("\n\nDinner is served!");
      }
    }, 1000);
  });
};

module.exports = { shopForBeans, soakTheBeans, cookTheBeans };

/// /// /// /// ///

const cookBeanSouffle = require("./library.js");

// Write your code below:

async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  } catch (error) {
    console.log(error);
    console.log("Ordering a pizza!");
  }
}

hostDinnerParty();

//This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < 0.5) {
    return true;
  } else {
    return false;
  }
};

//This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log("Fingers crossed... Putting the Bean Souffle in the oven");
    setTimeout(() => {
      let success = randomSuccess();
      if (success) {
        resolve("Bean Souffle");
      } else {
        reject("Dinner is ruined!");
      }
    }, 1000);
  });
};

module.exports = cookBeanSouffle;

/// /// /// /// ///

let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./library.js");

// Write your code below:

async function serveDinner() {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
  console.log(
    `Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
  );
}

serveDinner();

let cookBeans = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("beans");
    }, 1000);
  });
};

let steamBroccoli = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("broccoli");
    }, 1000);
  });
};

let cookRice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("rice");
    }, 1000);
  });
};

let bakeChicken = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("chicken");
    }, 1000);
  });
};

module.exports = { cookBeans, steamBroccoli, cookRice, bakeChicken };

/// /// /// /// ///

let {
  cookBeans2,
  steamBroccoli2,
  cookRice2,
  bakeChicken2,
} = require("./library.js");

// Write your code below:
async function serveDinnerAgain() {
  let foodArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans(),
  ]);

  console.log(
    `Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`
  );
}

serveDinnerAgain();

let cookBeans2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("beans");
    }, 1000);
  });
};

let steamBroccoli2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("broccoli");
    }, 1000);
  });
};

let cookRice2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("rice");
    }, 1000);
  });
};

let bakeChicken2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("chicken");
    }, 1000);
  });
};

module.exports = { cookBeans, steamBroccoli, cookRice, bakeChicken };