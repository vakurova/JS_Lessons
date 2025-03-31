var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  function addService(name, price) {
    services[name] = price + " грн";
  }
  
  function price(obj) {
    let sum = 0; 
    for (let key in obj) {
      let value = parseFloat(obj[key]); 
      sum += value; 
    }
    return sum + " грн";
  }
  
  function minPrice(obj) {
    let prices = Object.values(obj).map(function(p) {
      return parseFloat(p);
    });
    let min = Math.min(...prices);
    return min + " грн";
  }
  
  function maxPrice(obj) {
    let prices = Object.values(obj).map(function(p) {
      return parseFloat(p);
    });
    let max = Math.max(...prices);
    return max + " грн";
  }
  
  addService("Розбити скло", 200);
  addService("Зачіска", 500);
  addService("Масаж", 10);
 
  console.log("Загальна вартість наданих послуг:", price(services));
  console.log("Мінімальна ціна:", minPrice(services));
  console.log("Максимальна ціна:", maxPrice(services));
  