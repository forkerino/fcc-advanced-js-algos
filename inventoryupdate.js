/*Inventory Update 
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the 
new item and quantity into the inventory array. The returned inventory array should be in alphabetical 
order by item.*/

function updateInventory(arr1, arr2) {
  return arr1.concat(arr2)
    .sort((a,b)=> a[1]<b[1]? -1: 1)
    .reduce(function(pre, curr){
      if (pre.length && pre[pre.length-1][1] == curr[1]){
        pre[pre.length-1][0] += curr[0];
        return pre;  
      } else {
        return pre.concat([curr]);
      } 
    },[]);
}