/*Exact Change 
Design a cash register drawer function checkCashRegister() that accepts purchase price as the 
first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the 
third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.*/

function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100; 
  const values = [1,5,10,25,100,500,1000,2000,10000];
  let drawer = cid.reduce((a,b)=> a + b[1]*100,0);
  
  if (drawer == change) return "Closed";
  
  let moneyback = cid.map((e,i) => [e[0],e[1]*100])
        .reduceRight(function(p,c,i){
          let out = Math.min(change-change%values[i], c[1]);
          change -= out;
          return out ? p.concat([[c[0], out/100]]) : p;
        },[]);

  return change > 0 ? "Insufficient Funds" : moneyback;
}  
