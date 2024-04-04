// Sync Or Async

// Sync মানে একের পরে এক যাবে লাইন maintan করে যাবে।। যেমনঃ
console.log(`এটা ২সেকেন্ড লাগবে`);
console.log(`এটা ১৫সেকেন্ড লাগবে`);
console.log(`এটা ৫সেকেন্ড লাগবে`);
console.log(`এটা ১সেকেন্ড লাগবে`); //এর মানে প্রথম থেকে এক এক করে নিচে জাবে।

//Async মানে আগে জেটা কাজ শেষ করবে সে আগে যাবে।। জেমনঃ
setTimeout;
setInterval;
Promise;
fetch;
axios;
XMLHttpRequest;
//এগুলা সব কিছু Async.
