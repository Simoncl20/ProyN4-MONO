## `presupuesto_sectores(matriz, departamentos, sectores)`

#### Description:
This code snippet calculates the total budget for each sector based on a given matrix of budgets for different departments and a dictionary mapping sector IDs to sector names. It is typically used to analyze and summarize budget allocations across different sectors.

#### Important info:
This function assumes that the `matriz` parameter is a list of dictionaries where each dictionary represents the budget allocation for a specific department. Each department's budget allocation is further represented as a dictionary where the keys are the sector IDs and the values are the corresponding budget amounts.

#### Usage :

- This code snippet is used to calculate the total budget allocation for each sector.
- It is used to analyze and summarize budget allocations across different sectors.

#### How it Works:
1. Create an empty dictionary `presupuesto_sectores` to store the total budget for each sector.
2. Iterate over each department in the `departamentos` dictionary.
3. Retrieve the budget allocation for the current department from the `matriz` list using the department index.
4. Iterate over each sector in the `sectores` dictionary.
5. Retrieve the budget amount for the current sector from the department's budget allocation.
6. Retrieve the sector name from the `sectores` dictionary using the sector ID.
7. Check if the sector name already exists in the `presupuesto_sectores` dictionary. If it does, retrieve the accumulated budget amount, otherwise set the accumulated budget amount to 0.
8. Add the budget amount for the current sector to the accumulated budget amount.
9. Update the `presupuesto_sectores` dictionary with the new accumulated budget amount for the current sector.
10. Repeat steps 4-9 for each sector in the `sectores` dictionary.
11. Repeat steps 2-10 for each department in the `departamentos` dictionary.
12. Return the `presupuesto_sectores` dictionary containing the total budget allocation for each sector.

#### Dependencies:
- This function does not have any dependencies.