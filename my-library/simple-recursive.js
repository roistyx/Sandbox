function recursive(number) {

   const x = number -1;
   console.log(x, 'Done!');

   if (x == 0) {
   } else {
      recursive(x)
   }
}

recursive(20)