/*No repeats please 
Return the number of total permutations of the provided string that don't have repeated consecutive 
letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.*/

function permAlone(str) {  // Heap's Algorithm 
  let chars = str.split(''),
  count = 0;   

  function generate(n) {
    if (n == 1 && !chars.join('').match(/(.)\1+/g)) { 
      count++;
    } else {
      for (var i = 0; i < n; i++) { 
        generate(n - 1); 
        [arr[n % 2 ? 0 : i], arr[n-1]] = [arr[n-1],arr[n % 2 ? 0 : i]];  
      }
    }
  }

  generate(chars.length);
  return count;
}  