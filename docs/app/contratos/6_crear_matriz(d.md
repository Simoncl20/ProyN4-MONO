## `6_crear_matriz(d)`

#### Description:
This code snippet creates a matrix based on the provided data frame `data_contratos`. The matrix represents the values of each department and sector combination.

#### Important info:
This function assumes that the `data_contratos` data frame has a column named "Departamento" and another column named "Sector". It also assumes that the values of the "Departamento" column do not include the string "No Definido".

#### Usage :

- This code snippet is used to create a matrix from a data frame.
- The matrix represents the values of each department and sector combination.
- The created matrix can be used for further analysis or calculations.

#### How it Works:
1. Filter the `data_contratos` data frame to exclude rows where the "Departamento" column is equal to "No Definido". The filtered data frame is stored in the `datos` variable.
2. Get the unique values of the "Departamento" column from the `datos` data frame and sort them. Store the sorted unique values in the `departamentos` variable.
3. Create a dictionary `departamentos_dict` where the keys are the indices of the `departamentos` list and the values are the corresponding department names.
4. Get the unique values of the "Sector" column from the `datos` data frame and sort them. Store the sorted unique values in the `sectores` variable.
5. Create a dictionary `sectores_dict` where the keys are the indices of the `sectores` list and the values are the corresponding sector names.
6. Create a sorted list `nombres_sectores` of the unique sector names from the `datos` data frame.
7. Initialize an empty list `matriz` to store the values for each department and sector combination.
8. Iterate over the indices of the `departamentos_dict` dictionary.
    - For each index `i`, get the corresponding department name `departamento` from the `departamentos_dict` dictionary.
    - Call the `obtener_valores_departamento` function with the `datos`, `departamento`, and `nombres_sectores` as arguments to retrieve the values for the current department and sector combination.
    - Append the retrieved values to the `matriz` list.
9. Return a tuple containing the `matriz` list, `departamentos_dict` dictionary, and `sectores_dict` dictionary.

#### Dependencies:
- `pd`: This code snippet requires the pandas library to work with data frames.