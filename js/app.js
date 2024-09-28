// 1#

// {
//     const books = [
//         {
//             title: "Halqa",
//             author: "Akrom Malik",
//             read: true
//         },
//         {
//             title: "Dunyoning ishlari",
//             author: "O'tkir Hoshimov",
//             read: false
//         },
//         {
//             title: "Iymon",
//             author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//             read: false
//         }
//     ];

//     books.forEach((book, index) => {
//         const status = book.read ? "o'qilgan" : "o'qilmagan";
//         const respect = book.author === "Shayx Muhammad Sodiq Muhammad Yusuf" ? "hazratlarining " : "ning ";
//         console.log(`${index + 1}. ${book.author} ${respect}${book.title} kitobi ${status}`);
//     });
// }



// 2#

// const strings = ["text", "world", "laptop"];

// const result = strings.reduce((acc, str) => {
//   acc[str] = str.length;
//   return acc;
// }, {});

// console.log(result);


// 3#
// {
//     function getLevel(n) {
//         const result = [];
//         for (let i = 1; i <= n; i++) {
//             result.push(2 ** i);
//         }
//         return result;
//     }

//     console.log(getLevel(4));
//     console.log(getLevel(5));

// }


// 4#
// {
//     const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

//     const countOccurrences = animals.reduce((acc, animal) => {
//         acc[animal] = (acc[animal] || 0) + 1;
//         return acc;
//     }, {});

//     console.log(countOccurrences);

// }