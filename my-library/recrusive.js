let livingroom_set = {
    furniture: ['sofa', 'loveseat', 'chair'],
    electronics: {
        sound: ['subwoofer', 'soundbar','guitar', 'speakers'],
        video: ['videogames', 'television', 'phone']
    },
    rugs: ['persian', 'greekrug', 'help me!']

}
console.log('this is object: ',livingroom_set);

function recrusive(object) {
    const object_keys = Object.keys(object);
    for (let key of object_keys) {
      
        const item = object[key];
        if (typeof item == 'object'){
            recrusive(item);
        } else {
            console.log(key,item);
        }

    }
}

recrusive(livingroom_set)