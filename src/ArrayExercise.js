export default function ArrayExercise() {

    // função solution(A);
    // 1.
    // Dado um array A de N inteiros, retorna o menor inteiro positivo (maior que 0)
    // 2.
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
        // Remove possíveis duplicados
        const removedDuplicates = positiveA.map((item, index) => {
            // return `${item} ${index}`
            if (item[index] !== item[index + 1]) {
                return item
            } else return 1
        })
        console.log(removedDuplicates)
    }   
    const A = [-2, -1, 0, 1, 3, 6, 4, 1, 2]
    console.log(solution(A))

    return (
        <h4>Array exercise</h4>
    )
}