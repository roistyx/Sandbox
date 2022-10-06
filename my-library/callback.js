// A callback function that takes two parameters: one of the sucess and one for an error to check two variables to check if either one is true, and if neither is true it will throw an error message.
const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback){
    if (userLeft) {
    errorCallback({
    name: 'User Left',
    message: 'Good bye'
    })
    } else if (userWatchingCatMeme){
    errorCallback({
    name: 'User Watching Cat Meme',
    message: 'Meow'
    })
    } else {
    callback('Thumbs up and Subscribe')
    }
}

    watchTutorialCallback((the_message)=> {
    console.log('Success'+ the_message)
     }, (error) => {
    console.log(error.name + ', ' + error.message)
    })
