## `9_deptos_menor_gasto(m`

#### Description:
This code snippet generates a bar graph showing the departments with the lowest expenses. It takes a matrix of data, a specific department, and a list of sectors as input, and calculates the budget for each department. It then selects the 10 departments with the lowest budgets and creates a bar graph to visualize their expenses.

#### Important info:
- This function uses the `presupuesto_departamentos` function to calculate the budgets for each department.
- The input matrix should contain the expense data for each department and sector.

#### Usage :

- This code snippet is used to visualize the departments with the lowest expenses.
- It can be used to analyze the distribution of expenses across different departments and sectors.
- The generated bar graph can be used to identify departments that may need budget adjustments or further investigation.

#### How it Works:
1. Calls the `presupuesto_departamentos` function to calculate the budgets for each department.
2. Converts the budget values into a list and sorts it in ascending order.
3. Selects the first 10 elements from the sorted list, which represent the departments with the lowest expenses.
4. Creates an empty dictionary called `grafico`.
5. Iterates over the selected budget values and finds the corresponding department using the `get_key` function, and adds the department and its expense to the `grafico` dictionary.
6. Converts the `grafico` dictionary into a pandas DataFrame.
7. Creates a bar graph using the DataFrame and displays it.

#### Dependencies:
- `presupuesto_departamentos`: This function is used to calculate the budgets for each department based on the input matrix, department, and sectors.
- `pd` (pandas): This library is used to create a DataFrame from the `grafico` dictionary.
- `plt` (matplotlib.pyplot): This library is used to plot and display the bar graph.