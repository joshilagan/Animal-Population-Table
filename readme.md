# Animal Population Data

Animal Population data displays the animal population in a table.
The Update Animal Population Form takes in the input of bear type and new population number and updates the table upon click of Update Bear button.

**Features:**

- Built in Bootstrap. 
- Utilizes the new FormData() which converts the form into an object. The get() method is used to take in the name values and turn it key value pairs. Since the get() method converts characters to lowerCase, the switch case is used to convert it back to upperCase. This key value pairs will be used to update the array created outside the submit event listener. The values will then be reflected to the Animal population table.
- Dropdown menu was utilized for the selection of bear types.