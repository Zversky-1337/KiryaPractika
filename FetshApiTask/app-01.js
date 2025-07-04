// function logApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(
//           `Ошибка при получении пользователей: ${response.status}`
//         );
//       }
//       return response.json();
//     })
//     .then((users) => {
//       const arrayPromises = [];
//       let i = 0;

//       while (i < users.length) {
//         const user = users[i];

//         const userText = `Пользователь: ${user.username} (${user.email})`;

//         const postsPromise = fetch(
//           `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
//         )
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error(
//                 `Ошибка при получении постов пользователя ${user.id}`
//               );
//             }
//             return response.json();
//           })
//           .then((posts) => {
//             let text = "Посты:\n";
//             posts.forEach((post) => {
//               text += `- ${post.title}\n`;
//             });
//             return [userText, text];
//           });

//         arrayPromises.push(postsPromise);
//         i++;
//       }

//       return Promise.all(arrayPromises);
//     })
//     .then((arr) => {
//       arr.forEach(([userText, postsText]) => {
//         console.log(`${userText} \n ${postsText}`);
//       });
//     })
//     .catch((error) => console.error("Произошла ошибка:", error.message));
// }

// logApi();

async function logApi2() {
  try {
    const fetchUsers = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await fetchUsers.json();
    let i = 0;
    const arrayPromises = [];
    while (i < users.length) {
      const user = users[i];
      const userText = `Пользователь: ${user.name} (${user.email})`;
      const fetchPost = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );
      const textPosts = await fetchPost.json();
      let userPost = "Посты:\n";
      textPosts.forEach((post) => {
        userPost += `- ${post.title}\n`;
      });
      arrayPromises.push([userText, userPost]);
      i++;
    }
    arrayPromises.forEach(([userText, userPost]) => {
      console.log(`${userText} \n ${userPost}`);
    });
  } catch {}
}

logApi2();
