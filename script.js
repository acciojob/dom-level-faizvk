//your JS code here. If required.
// Get the target element
let element = document.getElementById("level");

// Initialize level count
let level = 0;

// Traverse up the DOM tree
while (element) {
  level++;
  element = element.parentElement;
}

// Display the result
alert("The level of the element is: " + level);
