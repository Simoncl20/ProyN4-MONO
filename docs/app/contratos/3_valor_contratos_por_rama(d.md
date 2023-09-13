## `3_valor_contratos_por_rama(d)`

#### Description:
This code snippet defines a function called `rq3_valor_contratos_por_rama` that takes in a pandas DataFrame `data_contratos`, and two floating-point numbers `inf` and `sup` as parameters. It filters the `data_contratos` DataFrame based on the condition that the value of the "ValordelContrato" column is greater than `inf` and less than `sup`. Then, it creates a boxplot of the filtered data grouped by the "Rama" column, showing the distribution of contract values for each category in the "Rama" column.

#### Important info:
This function visualizes the distribution of contract values for different categories in the "Rama" column of the input DataFrame. It helps in understanding the spread and variation of contract values within each category.

#### Usage :

- This code snippet is used to analyze and visualize the distribution of contract values for different categories in the "Rama" column.
- It can be used to identify outliers or unusual patterns in contract values within each category.
- It provides insights into the range and variability of contract values in different branches or categories.

#### How it Works:
1. The function filters the `data_contratos` DataFrame using the conditions: `(data_contratos.ValordelContrato > inf) & (data_contratos.ValordelContrato < sup)`.
2. It selects only the "Rama" and "ValordelContrato" columns from the filtered DataFrame and assigns it to the variable `graficar`.
3. It creates a boxplot of the `graficar` DataFrame, grouping the data by the "Rama" column.
4. The function sets the title, x-axis label, and y-axis label for the plot.
5. Finally, it displays the plot.

#### Dependencies:
- `pandas`: This code snippet requires the pandas library to work with DataFrames.
- `matplotlib.pyplot`: This code snippet requires the matplotlib.pyplot module from the matplotlib library to create the boxplot and display the plot.