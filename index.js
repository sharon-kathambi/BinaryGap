function solution(N) {
  let maxZeros = 0;
//loop to handle zero gap must be bound by 1s prerequisite
  while (N !== 0 && N % 2 === 0) {
    N >>>= 1; 
  }
//loop to iterate the binary number 
  for (let curr = 0; N !== 0; N >>>=1) {
    if (N % 2 === 0) {
      curr ++;
    }else{
      curr = 0;
    }
    //return the highest zero count
    maxZeros = Math.max(maxZeros, curr);
    console.log(maxZeros, curr)
  }
  return maxZeros;
}

console.log(solution(529))