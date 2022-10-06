// try {
//     console.log("Start of try runs");

//     errorThing;
//     console.log ("End of try -- never runs")

// } catch (error) {

//     console.log ("Error uccured", error.stack)
// } finally {
//     console.log ("This will always run")
// }

// console.log ("Then execution continues")

// const json = '{"age" : 30}';

// try {
//     let user = JSON.parse(json);
//     if (!user.name) {
//         throw new myError("Incomplete data: no name");
//     }

//     console.log(user.name);
// } catch (error) {
//     // console.log("JSON Erorr: " + error.message)
//     console.log("JSON Erorr: " + error)
// }

function moreThan50(number) {
    number = Number(number);
    if (number > 50) throw new Error("Can't be larger than 50");
    // if (number > 50) throw ("Can't be larger than 50");
    return number
}

// moreThan50(52)

fibForm = document.getElementById('fib-form')

// async function getFib(number) {
//     moreThan50(number);
//     const response = await fetch(`http://localhost:5050/fibonacci/${number}`);
//     const data = await response.json();
//     console.log(data)
// }

// getFib(12)

window.onload = async () => {

    fibForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            console.log("Event");
            let number = document.getElementById('floating-input').value;

            console.log(number)

            moreThan50(number);

            const response = await fetch(`http://localhost:5050/fibonacci/${number}`);
            const data = await response.json();

            const {result} = data

            console.log("Result " ,result);

            document.getElementById('fibonacci-result').innerHTML = result
        } 
        catch (error){
            // console.log("Error" , error);
            const moreThan50Element = document.getElementById("larger-than-50");
            moreThan50Element.style.display = 'block'
        }
    })
}