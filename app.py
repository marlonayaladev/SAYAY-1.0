import openpyxl
import json

# Cargar el archivo Excel con valores pre-calculados
excel_dataframe = openpyxl.load_workbook('PCREJERCITO.xlsx', data_only=True)
dataframe = excel_dataframe.active

data = []

# Recorrer todas las filas y columnas
for row in dataframe.iter_rows(values_only=True):
    data.append(list(row))  # Convertir cada fila en una lista y añadirla a los datos

# Exportar a un archivo JSON
with open("datos_ordenados.json", "w", encoding="utf-8") as json_file:
    json.dump(data, json_file, ensure_ascii=False, indent=4)

print("Datos exportados a datos_ordenados.json correctamente.")
