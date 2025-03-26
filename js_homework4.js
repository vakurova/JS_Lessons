function checkProbabilityTheory(count) {
    let even = 0;
  
    for (let i = 0; i < count; i++) {
      let num = Math.floor(Math.random() * 901) + 100;
      if (num % 2 === 0) even++;
    }
  
    let odd = count - even;
  
    let evenPercent = ((even / count) * 100).toFixed(2);
    let oddPercent = ((odd / count) * 100).toFixed(2);
  
    console.log("кількість чисел: " + count);
    console.log("кількість парних чисел: " + even);
    console.log("кількість непарних чисел: " + odd);
    console.log("% парних чисел: " + evenPercent + "%");
    console.log("% непарних чисел: " + oddPercent + "%");
  }
  
  checkProbabilityTheory(1000);