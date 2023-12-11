/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let summary = {};
  for(let i = 0;i < transactions.length;i++){

    let cur = transactions[i]
    let curCat = cur['category'];
    let curPrice = cur['price'];


    if(summary[curCat]){
        summary[curCat]+=curPrice;
    }
    else
    summary[curCat] = curPrice;
  }


  let ans = [];
  let keys = Object.keys(summary);
  for(let i = 0;i < keys.length;i++){
    let obj = {category:keys[i],
              totalSpent:summary[keys[i]]};
    ans.push(obj);
    // console.log(ptr);
  }

  return ans;
}


module.exports = calculateTotalSpentByCategory;
