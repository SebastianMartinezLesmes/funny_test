import json

# Función para obtener y mostrar la información de una persona por su ID
def obtener_persona_por_id(personas):
    # Solicitar ID al usuario
    try:
        id_usuario = int(input("Introduce el ID de la persona que deseas buscar: "))
    except ValueError:
        print("Por favor, ingresa un número válido para el ID.")
        return

    # Filtrar la persona correspondiente al ID
    persona = next((p for p in personas if p["id"] == id_usuario), None)

    if persona:
        # Mostrar la información de la persona
        print(persona)
    else:
        # Mensaje si no se encuentra la persona
        print(f"No se encontró una persona con ID {id_usuario}.")

# Leer el archivo JSON
def leer_archivo_json():
    try:
        with open('personas.json', 'r', encoding='utf-8') as file:
            personas = json.load(file)
            return personas
    except FileNotFoundError:
        print("El archivo personas.json no se encuentra.")
    except json.JSONDecodeError:
        print("Error al leer el archivo JSON, el formato no es válido.")
    return []

# Llamada principal
if __name__ == "__main__":
    personas = leer_archivo_json()
    if personas:
        print(f"Tamaño del objeto: {len(personas)} datos")
        obtener_persona_por_id(personas)

    else:
        print(f"sin datos del objeto")

# CMD: python  personGet.py