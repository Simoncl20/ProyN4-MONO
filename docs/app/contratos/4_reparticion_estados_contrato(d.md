## `4_reparticion_estados_contrato(d`

#### Description:
This code snippet generates a pie chart that represents the distribution of contract values based on the different contract states. It is typically used to visualize the proportion of contract values for each state.

#### Important info:
This function requires the `data_contratos` parameter, which is a pandas DataFrame containing the contract data.

#### Usage :

- This code snippet is used to visualize the distribution of contract values based on the contract states.
- This code snippet is used to analyze the proportion of contract values for each contract state.
- This code snippet is used to identify the most common contract states in terms of contract values.

#### How it Works:
1. Group the contract data by the 'EstadoContrato' column to obtain the count of contracts for each state.
2. Calculate the total number of contracts.
3. Prepare the labels for the pie chart representing the different contract states.
4. Create an empty list to hold the contract count values.
5. Iterate over the contract count values for each state and append them to the list.
6. Generate a pie chart using the contract count values and the labels.
7. Set the title, label for the y-axis, and display the pie chart.

#### Dependencies:
- pandas: This library is used to handle and manipulate the contract data stored in a DataFrame.
- matplotlib.pyplot: This library is used to create the pie chart visualization.