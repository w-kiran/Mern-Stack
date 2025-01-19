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
  // Create an empty object to keep track of total spent by category
  const categoryTotals = {};

  // Iterate through each transaction
  for (const transaction of transactions) {
    const { category, price } = transaction;

    // If the category is not in the object, initialize it with 0
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    // Add the price to the total for the category
    categoryTotals[category] += price;
  }

  // Convert the categoryTotals object into an array of objects
  const result = Object.entries(categoryTotals).map(([category, totalSpent]) => ({
    category,
    totalSpent
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;

