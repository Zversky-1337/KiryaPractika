const user = { name: "admin", password: "1234" };
//
// const { password, ...rest } = user;
// const result = JSON.stringify(rest);
// console.log(result);

// Все файн 😄

//Такой еще вариант фильтрации можно заюзать, или вынести в отдельную вообще функцию omit, которая key будет принимать
const safeUser = Object.fromEntries(
    Object.entries(user).filter(([key]) => key !== "password")
);



console.log(Object.entries(user));
// [ [ 'name', 'admin' ], [ 'password', '1234' ] ]


for (let i = 0; i < safeUser.length; i++) {
    const item = safeUser[i]
}