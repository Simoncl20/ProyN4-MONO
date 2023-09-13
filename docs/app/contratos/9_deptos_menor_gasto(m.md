## `9_deptos_menor_gasto(m`

#### Description:
This code snippet generates a bar chart showing the top 10 departments with the lowest expenses based on the given budget data.

#### Important info:
This function requires the "presupuesto_departamentos" function to be defined and imported from another module.

#### Usage :

- This code snippet is used to visualize the departments with the lowest expenses.
- It can be used to identify departments that need budget adjustments or cost-saving measures.

#### How it Works:
1. Get the budget data for the specified department and sectors using the "presupuesto_departamentos" function.
2. Convert the dictionary of budget values into a list.
3. Sort the list in ascending order to get the departments with the lowest expenses at the beginning.
4. Take the first 10 elements from the sorted list, which represent the departments with the lowest expenses.
5. Create an empty dictionary to store the department as the key and its corresponding expense as the value.
6. Iterate over the filtered list of budget values.
7. For each budget value, find the corresponding department using the "get_key" function (not provided).
8. Add the department and expense to the "grafico" dictionary.
9. Convert the "grafico" dictionary into a pandas DataFrame with the department as the index and the expense as the column.
10. Create a new figure for the chart.
11. Plot the DataFrame as a bar chart.
12. Display the bar chart.

#### Dependencies:
- `presupuesto_departamentos`: This function is required to retrieve the budget data for the specified department and sectors.