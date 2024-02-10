def insertion_sort(A):
    for j in range(1, len(A)):  # Loop externo
        chave = A[j]  # Aqui é onde definimos a "chave"
        i = j - 1  # i é o índice que usamos para percorrer a parte ordenada da lista
        while i >= 0 and A[i] > chave:  # Se o elemento na parte ordenada da lista for maior que a "chave", movemos esse elemento uma posição à frente
            A[i + 1] = A[i]  # Movemos o elemento uma posição à frente
            i = i - 1  # Decrementamos i para continuar a comparação com os elementos restantes da parte ordenada da lista
        A[i + 1] = chave  # Inserimos a "chave" na posição correta na parte ordenada da lista
    return A  # Retornamos a lista A que agora está ordenada

def main():
    # Lista de exemplo
    A = [5, 2, 4, 6, 1, 3]
    print("Lista original:", A)

    # Ordenando a lista
    A = insertion_sort(A)
    print("Lista ordenada:", A)

# Chamando a função main
if __name__ == "__main__":
    main()
