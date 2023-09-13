## `q2_deuda_por_departamento()`

#### Description:
This code snippet is a function that generates a bar chart showing the top 5 departments with the highest outstanding debt. It takes a DataFrame `data_contratos` as input, which contains information about contracts, including the department associated with each contract and the pending payment amount.

#### Important info:
- The function will only consider the top 5 departments with the highest outstanding debt.
- The bar chart will display the departments on the x-axis and the outstanding debt on the y-axis.

#### Usage :

- This code snippet is used to visualize the departments with the highest outstanding debt.
- The function can be used to identify the departments that require immediate attention in terms of debt management.

#### How it Works:
1. The function groups the data in the `data_contratos` DataFrame by the 'Departamento' column using the `groupby()` method.
2. The `sum()` method is then applied to calculate the total outstanding debt for each department.
3. The `sort_values()` method is used to sort the departments based on their outstanding debt in descending order.
4. The top 5 departments are selected using slicing (`data_by_departamentos[0:5]`).
5. The resulting data is assigned to the variable `graficar`.
6. The `plot()` method is called on `graficar` with the parameter `kind='bar'` to create a bar chart.
7. The figure size is set using the `figsize` parameter.
8. The title of the chart is set to 'Departamentos más deudores' (Departments with the highest outstanding debt).
9. The chart is displayed using `plt.show()`.

#### Dependencies:
- `pandas`: This dependency is used to handle and manipulate the DataFrame `data_contratos`.
- `matplotlib.pyplot`: This dependency is used to create and display the bar chart.