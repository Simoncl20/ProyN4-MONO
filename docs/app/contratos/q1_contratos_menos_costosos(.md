## `q1_contratos_menos_costosos()`

#### Description:
This code snippet searches for the 10 least expensive contracts from a given dataframe of budget execution data in 2019.

#### Important info:
This code snippet assumes that the given dataframe contains a column named 'ValordelContrato' which represents the value of each contract.

#### Usage :

- This code snippet is used to identify the 10 least expensive contracts from a dataset.
- This code snippet is used to analyze the distribution of contract values in a dataset.
- This code snippet is used to compare the costs of different contracts.

#### How it Works:
1. First, the code snippet filters out any contracts with a value of 0 or less from the given dataframe.
2. Then, it sorts the remaining contracts based on their value in ascending order.
3. It selects only the columns 'NombreEntidad', 'Departamento', 'ProveedorAdjudicado', and 'ValordelContrato' from the sorted dataframe.
4. Finally, it returns the first 10 rows of the filtered dataframe, which represent the 10 least expensive contracts.

#### Dependencies:
- `pandas`: This library is used to work with dataframes in Python. It is required to use this code snippet.