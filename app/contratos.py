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
    
def rq5_distribucion_valores_contratos(data_contratos: pd.DataFrame)->None:
    plt.figure()
    plt.title('Distribucion de los valores de los contratos')
    plt.ylabel('Densidad de Probabilidad')
    plt.xlabel('Valor Contrato')
    filtrado = data_contratos.ValordelContrato[(data_contratos.ValordelContrato > 0) & (data_contratos.ValordelContrato < 100)]
    plt.xlim((0,100))
    
    grafico = filtrado.plot.kde()

    plt.show()
    
    
def obtener_valores_departamento(data_contratos: pd.DataFrame, departamento: str, nombres_sectores: list)->list:
    
    count_departamento = data_contratos[(data_contratos.Departamento == departamento)]
    sectores = count_departamento.groupby('Sector')
    sectores = sectores.ValordelContrato.sum()
    data = sectores.sort_index().to_dict()
    dict_sectores = {}
    for nombre in nombres_sectores:
        dict_sectores[nombre] = data.get(nombre, 0)
    retorno = list(dict_sectores.values())
    return retorno
    
        
    

def rq6_crear_matriz(data_contratos: pd.DataFrame)->list:
    datos = data_contratos[data_contratos.Departamento != 'No Definido']
    departamentos = sorted(datos.Departamento.unique())
    departamentos_dict = dict(list(enumerate(departamentos)))
    sectores = sorted(datos.Sector.unique())
    sectores_dict = dict(list(enumerate(sectores)))
    nombres_sectores = list(datos.Sector.unique())
    nombres_sectores.sort()
    matriz = []
    for i in range(0, len(departamentos_dict)):
        departamento = departamentos_dict[i]
        datos_departamento = obtener_valores_departamento(datos, departamento, nombres_sectores)
        matriz.append(datos_departamento)
    
    return (matriz, departamentos_dict, sectores_dict)

def presupuesto_sectores(matriz: list, departamentos: dict, sectores: dict)->dict:
    
    presupuesto_sectores = {}
    
    for departamento in departamentos:
        
        data_dpto = matriz[departamento]
        
        for sector in sectores:
            
            valor_sector = data_dpto[sector]
            nombre_sector = sectores[sector]
            acumulado_sector = presupuesto_sectores.get(nombre_sector, 0)
            presupuesto_sectores[nombre_sector] = acumulado_sector + valor_sector
            
    
    return presupuesto_sectores
    
def rq7_sectores_inversion(matriz: list, inf: float, sup: float, departamentos: dict, sectores: dict)->list:
    presupuesto = presupuesto_sectores(matriz, departamentos, sectores)
    sectores_en_rango = []
    
    for sector in presupuesto:
        
        if presupuesto[sector] > inf and presupuesto[sector] < sup:
            
            sectores_en_rango.append(sector)
            
    
    return sectores_en_rango

def rq8_valor_sector(matriz: list, departamentos: dict, sectores: dict, sector_buscar: str)->float:
    
    presupuesto = presupuesto_sectores(matriz, departamentos, sectores)
    
    return  presupuesto[sector_buscar]
    
    
    
def presupuesto_departamentos(matriz, departamento, sectores):
    
    presupuesto_dpto = {}
    
    for departamento in departamentos:
        
        data_dpto = matriz[departamento]
        nombre_depto = departamentos[departamento]
        acumulado = 0
        for sector in sectores:
            
            valor_sector = data_dpto[sector]
            acumulado += valor_sector
        
        presupuesto_dpto[nombre_depto] = acumulado
    
    return presupuesto_dpto

def get_key(val, my_dict):
    for key, value in my_dict.items():
         if val == value:
             return key

def rq9_deptos_menor_gasto(matriz, departamento, sectores):
    
    presupuestos = presupuesto_departamentos(matriz, departamento, sectores)
    
    lista_pp = list(presupuestos.values())
    
    lista_pp.sort()
    
    lista_filtrada = lista_pp[0:10]

    nombre = "Simon Calderon"
    
    grafico = {}
    
    for pp in lista_filtrada:
        
        depto = get_key(pp, presupuestos)
        
        grafico[depto] = pp
        
    
    df = pd.DataFrame.from_dict(grafico, orient='index', columns=['Gasto'])
    
    
    
    plt.figure()
    
    df.plot(kind = 'bar')
    
    plt.show()

def fibonacci(n):
    # Creamos un arreglo para almacenar los valores de Fibonacci.
    fib = [0] * (n + 1)

    # Casos base
    fib[0] = 0
    fib[1] = 1

    # Calculamos los valores de Fibonacci desde el 2 hasta n.
    for i in range(2, n + 1):
        fib[i] = fib[i - 1] + fib[i - 2]

    return fib[n]
    


datos = rq0_cargar_datos('2019.csv') 
retornos = rq6_crear_matriz(datos)
matriz = retornos[0]
departamentos = retornos[1]
sectores = retornos[2]




# %%
