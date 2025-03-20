function pow(x, y) {
    let result = 1;  // Присвоюємо 1, бо інакше буде множити на 0 з першого циклу

    for (let i = 0; i < y; i++) {  // Цикл буде повторюватись кількістю рівней ступеню (у)
        result = result * x;  
    }

    return result;
}
console.log(pow(3, 5)); 
