## `8_valor_sector(m)`

#### Description:
This code snippet is a function that takes a matrix, dictionaries of departments and sectors, and a sector name as input. It calculates the budget of the specified sector and returns it as a float value.

#### Important info:
This function relies on the `presupuesto_sectores()` function to calculate the budget of each sector in the matrix.

#### Usage :

- This code snippet is used to retrieve the budget of a specific sector.
- It is used to get the budget for a particular sector in a matrix.

#### How it Works:
The function first calls the `presupuesto_sectores()` function, passing the matrix, departments, and sectors dictionaries. This function returns a dictionary with the budgets of each sector. The function then retrieves the budget of the specified sector from the dictionary and returns it.

#### Dependencies:
- `presupuesto_sectores()`: This function calculates the budget of each sector in the matrix based on the departments and sectors dictionaries.