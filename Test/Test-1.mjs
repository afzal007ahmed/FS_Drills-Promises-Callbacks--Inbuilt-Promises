import { createFiles, DeleteFiles, allActions } from "../Problem-1.js";
let promise = allActions('/home/afzal-ahmed/Downloads/AllJSON/', 'file.json', createFiles, 'Hello World!');

promise
    .then((res) => {
        console.log(res); // Output: "Promise Resolved"
    })
    .catch((err) => {
        console.log(err);
    });
allActions('/home/afzal-ahmed/Downloads/AllJSON/', 'file.json', DeleteFiles);