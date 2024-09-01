import fs from 'fs'
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
export function leerArchivoComoString(ruta) {
    try {  
        return fs.readFileSync(ruta, 'utf-8')
    } catch (error) {
        console.error(`Error al leer el archivo en la ruta: ${ruta}`, error)
        throw error
    }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
export function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    if(fs.existsSync(ruta)){
        fs.appendFileSync(ruta, texto)
    } else if (shouldCreateIfNotExists) {
        fs.writeFileSync(ruta, texto)
    } else {
        throw new Error(`El archivo en la ruta ${ruta} no existe y no se permite crear uno nuevo.`)
    }
}

// exportar ambas funciones
