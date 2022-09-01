function myFunction(number) 
{
    return new Promise((resolve, reject) => 
    {
      setTimeout(() => 
      {
        if (number > 500) 
        {
          resolve("Success");
        } else {
          reject("Fail");
        }
      }, number);
    });
  }
  
  const p1 = myFunction(2000);
  const p2 = myFunction(1500);
  const p3 = myFunction(1000);
  const p4 = myFunction(300);
  
  Promise.allSettled([p1, p2, p3, p4]).then((results) => {
    console.log("results", results);
  });



