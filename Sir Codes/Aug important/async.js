// default - Synchronous and blocking
/*

console.log("Hello");
console.log("World");
console.log("Awesome");
*/

// Async
/*
console.log("Hello");
getuser(1, handleGetUser);

const handleGetUser = ({ gitHubProfileId }) => {
  // console.log(gitHubProfileId);
  getRepositories(gitHubProfileId, handleGetRepos);
};

const handleGetRepos = (err, repos) => {
  console.log(repos);
  getCommits(repos[0], handleCommits);
};

const handleCommits = (commits) => {
  console.log(commits);
};
console.log("Awesome");

*/
/**
 // We need this 

console.log("Hello");
const user = getuser(1);
const repos = getRepos(user.gitHubProfileId);
const commits = getCommits(repos[0]);
console.log(commits);
console.log("Awesome");
 */

console.log("Hello");
// getUser(1);

getUser(1)
  .then((user) => getRepositories(user.gitHubProfileId))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => {
    console.log(commits);
    return "Awesome job done!!!!!";
  })
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err.message))
  .finally(() => {
    console.log("Execution finished. Clearing resources...");
  });
// async function getAllCommits() {
//   try {
//     const user = await getUser(1);
//     const repos = await getRepositories(user.gitHubProfileId);
//     const commits = await getCommits(repos[0]);
//     console.log(commits);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllCommits();
getTemperature();
console.log("Awesome");

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ id: 1, gitHubProfileId: "mdshais" });
//   }, 2000);

//   reject(new Error("Received error..."));
// });

// p.then(
//   (data) => console.log(data)
//   // (error) => console.log(error.message)
// );

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, gitHubProfileId: "mdshais" });
    }, 2000);
  });
}

function getRepositories(gitHubProfileId) {
  return new Promise((resolve, reject) => {
    throw new Error("Failed to fetch repositories....");
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3", "repo4", "repo5"]);
    }, 2000);
  });
}

function getCommits(repoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        "commit1",
        "commit2",
        "commit3",
        "commit4",
        "commit5",
        "commit6",
        "commit7",
        "commit8",
      ]);
    }, 3000);
  });
}

// 1. callback  - Problem -> Callback Hell - Solution -> Use named functions
// 2. promises
// 3. async and await
// function getuser(userId, callback) {
//   setTimeout(() => {
//     callback({ id: 1, gitHubProfileId: "mdshais" });
//   }, 2000);
// }

// function getRepositories(gitHubProfileId, callback) {
//   setTimeout(() => {
//     callback(["repo1", "repo2", "repo3", "repo4", "repo5"]);
//   }, 2000);
// }

// function getCommits(repoId, callback) {
//   setTimeout(() => {
//     callback([
//       "commit1",
//       "commit2",
//       "commit3",
//       "commit4",
//       "commit5",
//       "commit6",
//       "commit7",
//       "commit8",
//     ]);
//   }, 3000);
// }

function getTemperature() {
  setTimeout(() => {
    console.log("Temperature is 30 celcius");
  }, 10000);
}

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}

// getAllTodos();

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => resolve(xhttp.response);

    xhttp.onerror = (err) => reject(err);
    // Send a request
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}

myFetch("https://jsonplaceholder.typicode.com/toos/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// .then((resp) => console.log(resp));
