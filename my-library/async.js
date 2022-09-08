// I don't get it

function funci0(){
    let x = 5;
    return x;
}
function funci1(){
  return
 
    
}

function funci2(){
    return 2;
    
}

function syncronnous_func() {
    const result0 = funci0();
    const result1 = (funci1(result0)+1);
    const result2 = (funci2(result1)+1);    
    console.log(result1)
}

syncronnous_func()


async function asyncronnous_func() {
    try{
        const result0 = await funci0();
        const result1 = await (funci1(result0)+1);
        const result2 = await (funci2(result1)+1);    
        console.log(result1)
    }

    catch(exception) {
        console.log(exception, 'End')
    }
}

asyncronnous_func()



