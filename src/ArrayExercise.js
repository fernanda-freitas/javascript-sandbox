export default function ArrayExercise() {

    // função solution(A);
    // Dado um array A de N inteiros, retorna o menor inteiro positivo (maior que 0)
    // que não ocorre em A.
    // Por exemplo, dada A = [1, 3, 6, 4, 1, 2], a função deve retornar 5.
    // Dado A = [1, 2, 3], a função deve retornar 4.
    // Dado A = [−1, −3], a função deve retornar 1.

    const solution = (A) => {
        console.log('começa aqui')
        console.log(A)
        // Ordena do menor para o maior
        const sortedA = A.sort((a,b) => a - b)
        console.log(sortedA)
        // Garante que só há inteiros positivos no array
        const positiveA = sortedA.filter((num) => num > 0)
        console.log(positiveA)
        // TODO: Remove possíveis duplicados

        // TODO: Usa o método Reduce para retornar o menor valor não existente
    }   
    const A = [-2, -1, 0, 1, 3, 6, 4, 1, 2]
    console.log(solution(A))

    return (
        <h4>Array exercises</h4>
    )
}