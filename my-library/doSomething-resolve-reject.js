async function doSomething (user) {
    return new Promise ((resolve, reject) => {
        if (user.id) {
            resolve(user.id);
        } else { 
            resolve("no-id");

        }
    })
}

const user = { id: "2553"};
doSomething(user).then((id) => {
    console.log(id);
}).catch(error => {
    console.error(error)
})