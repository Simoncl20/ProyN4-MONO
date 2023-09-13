## `5_distribucion_valores_contratos(data_contratos: pd.DataFrame)`

#### Description:
This code snippet generates a kernel density estimation plot to visualize the distribution of contract values in a given dataframe.

#### Important info:
None

#### Usage:

- This code snippet is used to visualize the distribution of contract values.
- It can be used to identify the concentration of contract values within a specific range.
- It helps in understanding the spread of contract values and detecting outliers.

#### How it Works:
1. Create a new figure for the plot.
2. Set the title, ylabel, and xlabel for the plot.
3. Filter the dataframe to only include contract values between 0 and 100.
4. Set the x-axis limits to (0, 100).
5. Generate the kernel density estimation plot using the filtered data.
6. Display the plot.

#### Dependencies:
- `pd.DataFrame`: The input dataframe containing contract data.