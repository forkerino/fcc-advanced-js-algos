/*Symmetric Difference 
Create a function that takes two or more arrays and returns an array of the symmetric difference
 (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term 
"symmetric difference" of two sets is the set of elements which are in either of the two sets, 
but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take 
(say on a set D = {2, 3}), you should get the set with elements which are in either of the two 
the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).*/

function sym(...args) { 
   return args.map(arr => 
      [...new Set(arr)]) // remove duplicate
        .reduce((a,b) => a.concat(b) // concat two arrays
          .filter(v => !b.includes(v) || !a.includes(v))); // remove the values that are in both
 }
   /* first go over each subarray and remove all duplicate values,
  then reduce the concatenation of two arrays by only allowing 
  values that are in either of the two (XOR).*/