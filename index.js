// leo los 4 archivos a memoria
import { leerArchivoComoString } from './src/utils/fileUtils.js'

const archivo1 = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
const archivo2 = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
const archivo3 = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
const archivo4 = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')

// preparo los 4 arrays a partir de los archivo leidos
import { transformarStringEnArrayDeNumeros } from './src/utils/transformUtils.js'

const arr1 = transformarStringEnArrayDeNumeros(archivo1, ',')
const arr2 = transformarStringEnArrayDeNumeros(archivo2, ',')
const arr3 = transformarStringEnArrayDeNumeros(archivo3, ',')
const arr4 = transformarStringEnArrayDeNumeros(archivo4, ',')

// combino los primeros dos arrays
import { combinarDosArrays } from './src/apareo.js'
const arr1y2 = combinarDosArrays(arr1, arr2)

// combino los cuatro arrays
import { combinarNArrays } from './src/apareo.js'

const combinados = combinarNArrays([arr1, arr2, arr3, arr4])
console.log(combinados)