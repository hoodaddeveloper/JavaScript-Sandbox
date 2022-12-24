// Information to reach API
const url = "https://api.datamuse.com/words?sl=";

// Selects page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${wordQuery}`;

  fetch(endpoint, { cache: "no-cache" })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      // renderRawResponse(jsonResponse);
      renderResponse(jsonResponse);
    });
};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);

// Formats response to look presentable on webpage
const renderResponse = (res) => {
  // Handles if res is falsey
  if (!res) {
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if (!res.length) {
    responseField.innerHTML =
      "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }

  // Creates an empty array to contain the HTML strings
  let wordList = [];
  // Loops through the response and caps off at 10
  for (let i = 0; i < Math.min(res.length, 10); i++) {
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return;
};

// Renders response before it is modified
const renderRawResponse = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
};

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (res) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for (let key in res) {
    rawJson[key] = res[key];
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
};

// Information to reach API
const apiKey = "<Your API Key>";
const url2 = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField2 = document.querySelector("#input");
const shortenButton2 = document.querySelector("#shorten");
const responseField2 = document.querySelector("#responseField");

// Asynchronous functions
const shortenUrl = () => {};

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton2.addEventListener("click", displayShortUrl);

// Information to reach API
const apiKey3 = "<Your API Key>";
const url3 = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField3 = document.querySelector("#input");
const shortenButton3 = document.querySelector("#shorten");
const responseField3 = document.querySelector("#responseField");

// Asynchronous functions
const shortenUrl3 = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      apikey: apiKey,
    },
    body: data,
  });
};

// Clear page and call AJAX functions
const displayShortUrl3 = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton3.addEventListener("click", displayShortUrl);

// Information to reach API
const apiKey4 = "<Your API Key>";
const url4 = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField4 = document.querySelector("#input");
const shortenButton4 = document.querySelector("#shorten");
const responseField4 = document.querySelector("#responseField");

// Asynchronous functions
const shortenUrl4 = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      apikey: apiKey,
    },
    body: data,
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      renderResponse(jsonResponse);
    });
};

// Clear page and call Asynchronous functions
const displayShortUrl2 = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton4.addEventListener("click", displayShortUrl);

// Manipulates responseField to render a formatted and appropriate message
const renderResponse3 = (res) => {
  // Displays either message depending on results
  if (res.errors) {
    responseField.innerHTML =
      "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
};

// Manipulates responseField to render an unformatted response
const renderRawResponse3 = (res) => {
  // Displays either message depending on results
  if (res.errors) {
    responseField.innerHTML =
      "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = `<pre>${structuredRes}</pre>`;
    responseField.innerHTML = `${structuredRes}`;
  }
};

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse3 = (response) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for (let key in response) {
    rawJson[key] = response[key];
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
};

// Information to reach API
const url5 = "https://api.datamuse.com/words?";
const queryParams = "rel_jja=";

// Selecting page elements
const inputField5 = document.querySelector("#input");
const submit5 = document.querySelector("#submit");
const responseField5 = document.querySelector("#responseField");

// Asynchronous function
// Code goes here
const getSuggestions5 = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, { cache: "no-cache" });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

// Clear previous results and display results to webpage
const displaySuggestions5 = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);

// Formats response to look presentable on webpage
const renderResponse6 = (res) => {
  // Handles if res is falsey
  if (!res) {
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if (!res.length) {
    responseField.innerHTML =
      "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }

  // Creates an empty array to contain the HTML strings
  let wordList = [];
  // Loops through the response and caps off at 10
  for (let i = 0; i < Math.min(res.length, 10); i++) {
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return;
};

// Renders response before it is modified
const renderRawResponse6 = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
};

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse6 = (res) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for (let key in res) {
    rawJson[key] = res[key];
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
};

// information to reach API
const apiKey33 = "<Your API Key>";
const url33 = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField33 = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField33 = document.querySelector("#responseField");

// Asynchronous functions
// Code goes here
const shortenUrl33 = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });
  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
        apikey: apiKey,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

// Clear page and call Asynchronous functions
const displayShortUrl33 = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener("click", displayShortUrl);

// Manipulates responseField to render a formatted and appropriate message
const renderResponse4 = (res) => {
  // Displays either message depending on results
  if (res.errors) {
    responseField.innerHTML =
      "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
};

// Manipulates responseField to render an unformatted response
const renderRawResponse4 = (res) => {
  // Displays either message depending on results
  if (res.errors) {
    responseField.innerHTML =
      "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = `<pre>${structuredRes}</pre>`;
    responseField.innerHTML = `${structuredRes}`;
  }
};

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse4 = (response) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for (let key in response) {
    rawJson[key] = response[key];
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
};