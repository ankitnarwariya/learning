// Function to display all food items
function showAll() {
    displayList(listAllFoodItems(data));
  }
  
  // Function to display food items by category
  function showCategory(category) {
    displayList(listFoodByCategory(data, category));
  }
  
  // Function to display food items with calories above 100
  function showCaloriesAbove() {
    displayList(listFoodByCalories(data, 100, true));
  }
  
  // Function to display food items with calories below 100
  function showCaloriesBelow() {
    displayList(listFoodByCalories(data, 100, false));
  }
  
  // Function to display food items sorted by protein content
  function sortByProtein() {
    displayList(listFoodByProtein(data));
  }
  
  // Function to display food items sorted by carbohydrates content
  function sortByCarbohydrates() {
    displayList(listFoodByCarbohydrates(data));
  }

  // Function to filter all food items
function listAllFoodItems(data) {
    return data;
  }
  
  // Function to filter food items by category
  function listFoodByCategory(data, category) {
    return data.filter(item => item.category === category);
  }
  
  // Function to filter food items by calories above/below a threshold
  function listFoodByCalories(data, threshold, above) {
    if (above) {
      return data.filter(item => item.calorie > threshold);
    } else {
      return data.filter(item => item.calorie < threshold);
    }
  }
  
  // Function to sort food items by protein content (High to Low)
  function listFoodByProtein(data) {
    return data.slice().sort((a, b) => b.protiens - a.protiens);
  }
  
  // Function to sort food items by carbohydrate content (Low to High)
  function listFoodByCarbohydrates(data) {
    return data.slice().sort((a, b) => a.cab - b.cab);
  }
  
  // ... (other functions for filtering/sorting)
  
  // Rest of the script remains the same
  // Ensure the 'fetch' code and display functionality are present
  
  
  
  // Function to display the list of food items
  function displayList(list) {
    const foodTable = document.getElementById('foodTableBody');
    foodTable.innerHTML = ''; // Clear table content
    list.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.foodname}</td>
        <td>${item.calorie}</td>
        <td>${item.category}</td>
        <td>${item.protiens}</td>
        <td>${item.cab}</td>
      `;
      foodTable.appendChild(row);
    });
  }
  
  // Fetch the food data from food.json
  fetch('./food.json')
    .then(response => response.json())
    .then(data => {
      window.data = data;
      displayList(listAllFoodItems(data)); // Display all food items initially
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  