var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
  
    addService: function(name, price) {
      this[name] = price + " грн";
    },
  
    price: function () {
      let sum = 0;
      for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
          sum += parseFloat(this[key]);
        }
      }
      return sum + " грн";
    },
  
    minPrice: function () {
      let prices = [];
      for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
          prices.push(parseFloat(this[key]));
        }
      }
      return Math.min(...prices) + " грн";
    },
  
    maxPrice: function () {
      let prices = [];
      for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
          prices.push(parseFloat(this[key]));
        }
      }
      return Math.max(...prices) + " грн";
    }
  };
  
  services.addService("Розбити скло", 200);
  services.addService("Зачіска", 500);
  services.addService("Масаж", 10);
  
  console.log("Загальна вартість наданих послуг:", services.price());
  console.log("Мінімальна ціна:", services.minPrice());
  console.log("Максимальна ціна:", services.maxPrice());
  
  