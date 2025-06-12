const user = { name: "admin", password: "1234" };

const { password, ...safeUser } = user;
const result = JSON.stringify(safeUser);
console.log(result);

// Все файн 😄

//Такой еще вариант фильтрации можно заюзать, или вынести в отдльную вообще функцию omit, которая key будет принимать
const safeUser = Object.fromEntries(
    Object.entries(user).filter(([key]) => key !== "password")
);
