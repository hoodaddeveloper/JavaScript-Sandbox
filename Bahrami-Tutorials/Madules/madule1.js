let myName = "HoodadWesker";
let myAge = 30;

function coding() {
  console.log("Hoodad is coding...");
}

export {
  myName,
  myAge,
  coding
};

export {
  myName as firstName,
  myAge as hoodadAge,
  coding as hoodadCoding
};