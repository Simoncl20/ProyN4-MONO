## `7_sectores_inversion(m)`

#### Description:
This code snippet takes a matrix `matriz`, a lower bound `inf` and an upper bound `sup`, as well as dictionaries `departamentos` and `sectores`. It calculates the budget for each sector using the `presupuesto_sectores` function and returns a list of sectors whose budget falls within the given range.

#### Important info:
This code snippet is used to filter sectors based on their budget range.

#### Usage :

- This code snippet is used to filter sectors based on their budget range.

#### How it Works:
1. Calculate the budget for each sector using the `presupuesto_sectores` function.
2. Create an empty list `sectores_en_rango` to store the sectors within the given budget range.
3. Iterate over each sector in the `presupuesto` dictionary.
4. Check if the budget for the current sector is greater than `inf` and less than `sup`.
5. If the budget falls within the given range, add the sector to the `sectores_en_rango` list.
6. Return the `sectores_en_rango` list.

#### Dependencies:
- `matriz`: A matrix containing budget information for each sector and department.
- `inf`: The lower bound of the budget range.
- `sup`: The upper bound of the budget range.
- `departamentos`: A dictionary mapping department names to their respective indices in the matrix.
- `sectores`: A dictionary mapping sector names to their respective indices in the matrix.