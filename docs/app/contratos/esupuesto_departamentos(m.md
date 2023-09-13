## `esupuesto_departamentos(m)`

#### Description:
This code snippet calculates the budget for each department based on a given matrix and a list of sectors. It returns a dictionary where the keys are the department names and the values are the total budget for each department.

#### Important info:
This code snippet assumes that the input matrix is a dictionary where the keys are department names and the values are dictionaries representing the budget for each sector.

#### Usage :

- This code snippet is used to calculate the budget for each department.
- This code snippet is used to aggregate the budget for each sector in a department.
- This code snippet is used to store the budget information in a dictionary.

#### How it Works:
1. Create an empty dictionary `presupuesto_dpto` to store the budget for each department.
2. Iterate over each department in the `departamentos` list.
3. Get the budget data for the current department from the input matrix using the department as the key.
4. Get the department name from the `departamentos` dictionary using the department as the key.
5. Initialize a variable `acumulado` to store the total budget for the department.
6. Iterate over each sector in the `sectores` list.
7. Get the budget value for the current sector from the department's budget data.
8. Add the budget value to the `acumulado` variable.
9. Add an entry to the `presupuesto_dpto` dictionary where the key is the department name and the value is the `acumulado` variable.
10. Return the `presupuesto_dpto` dictionary containing the budget for each department.

#### Dependencies:
- This function does not have any dependencies.