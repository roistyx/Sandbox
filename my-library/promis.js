const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback){
    if (userLeft) {
    errorCallback({
    name: 'User Left',
    message: '('
    })
    } else if (userWatchingCatMeme){
    errorCallback({
    name: 'User Watching Cat Meme',
    message: 'WebDevSimplified < Cat'
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