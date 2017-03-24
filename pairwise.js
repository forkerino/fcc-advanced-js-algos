/*Pairwise 
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of 
their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the 
smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. 
We can then write out the array with their indices and values.*/

const pairwise = (arr, arg) => arr.map((e,i,a) => 
    (a.indexOf(arg-e,i+1) > 0 || e=='y') ? a[a.indexOf(arg-e)] = 'y' : null)
      .reduce((a,b,i)=> b=='y'? a+=i : a,0);

/*Classic:*/
function pairwise(arr, arg) {
  let indexArr = []; // store indices here.
    
  for (let i=0; i<arr.length; i++){ 
    for (let j=0; j<arr.length; j++){
      if (i !== j && arr[i] + arr[j] === arg) { 
        indexArr.push(i,j);
        arr[i] = undefined; // make sure numbers aren't used twice.
        arr[j] = undefined;
      }
    }
  }  
  
  return indexArr.reduce((a,b) => a+b,0);
}