/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
export function combinarDosArrays(arrA, arrB) {
    return [...new Set([...arrA, ...arrB])]
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
export function combinarNArrays(arrays) {
    return arrays.reduce((acumulador, arrayAAcumular) => combinarDosArrays(acumulador, arrayAAcumular), [])
}

// exportar ambas funciones