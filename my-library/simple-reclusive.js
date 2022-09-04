function reclusive(number) {

   const x = number -1;
   console.log(x, 'Done!');

   if (x == 0) {
   } else {
    reclusive(x)
   }
}

reclusive(20)