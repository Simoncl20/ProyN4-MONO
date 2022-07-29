"""
Universidad de los Andes

Proyecto Nivel 4

Modulo de Funciones

Juan Jose Rivera Agudelo

Código Estudiante:

Correo Uniandes:

"""
#%%

import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.image as mpimg
import matplotlib.patches as mpatches


#RQ0

def rq0_cargar_datos(file_name: str)->pd.DataFrame:
    """
    
    Carga los datos de un CSV y los pone en 
    un dataframe

    Args:
        file_name (str): Nombre del archivo

    Returns:
        pd.DataFrame: Dataframe con los datos cargados
    """    
    
    return pd.read_csv(file_name)


def rq1_contratos_menos_costosos(data_contratos: pd.DataFrame)->pd.DataFrame:
    """
    
    Busca los 10 contratos menos costosos

    Args:
        data_contratos (pd.DataFrame): Dataframe con los datos de la Ejecucion Presupuestal de 2019

    Returns:
        pd.DataFrame: Dataframe con los datos de los 10 contratos menos costosos
    """    
    
    filtro_valor = data_contratos[data_contratos.ValordelContrato > 0]
    filtro_valor = filtro_valor.sort_values('ValordelContrato')
    filtro_valor = filtro_valor[['NombreEntidad', 'Departamento', 'ProveedorAdjudicado', 'ValordelContrato']]
    filtro_valor = filtro_valor.iloc[0:9]
    return filtro_valor

def rq2_deuda_por_departamento(data_contratos: pd.DataFrame)->None:
    plt.figure()
    data_by_departamentos = data_contratos.groupby('Departamento')
    data_by_departamentos = data_by_departamentos.sum()
    data_by_departamentos = data_by_departamentos.ValorPendientedePago.sort_values(ascending = False)
    data_by_departamentos = data_by_departamentos[0:5]
    graficar = data_by_departamentos
    
    graficar.plot(kind ='bar', figsize = (10,15), title= 'Departamentos más deudores')
    
    plt.show()
    
def rq3_valor_contratos_por_rama(data_contratos: pd.DataFrame, inf: float, sup: float)->None:
    plt.figure(figsize=(15,10))
    filtrado = data_contratos[(data_contratos.ValordelContrato > inf) & (data_contratos.ValordelContrato < sup)]
    graficar = filtrado.loc[:, ['Rama', 'ValordelContrato']]
    graficar.boxplot(by = 'Rama')
    plt.title('Valor de Contratos por Rama')
    plt.xlabel('Rama Contratada')
    plt.ylabel('Valor del Contrato')
    plt.show()

    
    
def rq4_reparticion_estados_contrato(data_contratos: pd.DataFrame)->None:
    plt.figure(figsize = (8,8))
    agrupados = data_contratos.groupby('EstadoContrato')
    agrupados = agrupados.NombreEntidad.count()
    total = agrupados.sum()
    labels = ['Activo', 'Cerrado', 'Modificado', 'Suspendido', 'Cedido', 'Terminado']
    valores = []
    for valor in agrupados:
        
        valores.append(valor)
        
    plt.pie(valores, labels=labels, autopct='%1.1f%%')
    plt.title('Distribucion de valor de contratos por Estado del Contrato')
    plt.ylabel('Estado del Contrato')
    plt.show()
    
        
    
    
    
    


datos = rq0_cargar_datos('2019.csv') 



# %%
