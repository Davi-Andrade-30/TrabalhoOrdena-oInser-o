function insertionSort(A) {  // Definimos a função insertionSort que recebe um array A como argumento
    for (let j = 1; j < A.length; j++) {  // O loop externo percorre cada elemento do array A começando do segundo elemento (índice 1)
        let chave = A[j];  // A "chave" é o elemento atual que estamos considerando para inserir na parte ordenada do array
        let i = j - 1;  // i é usado para percorrer a parte já ordenada do array (todos os elementos antes de j)
        while (i >= 0 && A[i] > chave) {  // O loop interno percorre a parte ordenada do array. Se o elemento do array for maior que a "chave", então movemos esse elemento uma posição à frente
            A[i + 1] = A[i];  // Movemos o elemento A[i] uma posição à frente
            i = i - 1;  // Decrementamos i para continuar a comparação com os elementos restantes da parte ordenada do array
        }
        A[i + 1] = chave;  // Depois de mover todos os elementos maiores que a "chave" uma posição à frente, inserimos a "chave" na posição correta na parte ordenada do array
    }
    return A;  // Retornamos o array A que agora está ordenado
}

let numeros = [5, 3, 1, 4, 6];  // Criamos um array de números
numeros = insertionSort(numeros);  // Chamamos a função insertionSort com o array de números
console.log(numeros);  // Imprimimos o array ordenado


