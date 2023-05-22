function converterTemperatura() {
    var temperatura = parseFloat(document.getElementById("temp").value);
    var escala = document.getElementById("scale").value;
    var resultado;
  
    if (isNaN(temperatura)) {
      document.getElementById("resultado").innerHTML = "Nenhum valor inserido";
      document.body.style.backgroundColor = "#fff"; // Cor padrão de fundo
      return;
    }
  
    if (escala === "C") {
      resultado = temperatura;
    } else if (escala === "F") {
      resultado = temperatura * 1.8 + 32;
    } else if (escala === "K") {
      resultado = temperatura + 273;
    }
  
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2) + " " + escala;
  
    // Definir cor de fundo com base nos valores de temperatura
    if (escala === "C") {
      if (resultado === -273.15 || (resultado >= -273.15 && resultado % 10 === 0)) {
        document.body.style.backgroundColor = "#000dff"; // Cor de fundo para -273.15°C e múltiplos de 10 em Celsius
      } else {
        document.body.style.backgroundColor = "#fff"; // Cor padrão de fundo
      }
    } else if (escala === "K") {
      if (resultado === 0 || (resultado >= 0 && resultado % 10 === 0)) {
        document.body.style.backgroundColor = "#000dff"; // Cor de fundo para 0K e múltiplos de 10 em Kelvin
      } else {
        document.body.style.backgroundColor = "#fff"; // Cor padrão de fundo
      }
    } else if (escala === "F") {
      var fahrenheit18 = (18 - 32) / 1.8;
      if (resultado >= fahrenheit18) {
        var r = Math.floor((resultado - fahrenheit18) * (255 / (100 - fahrenheit18)));
        var g = Math.floor((255 - (resultado - fahrenheit18) * (255 / (100 - fahrenheit18))));
        document.body.style.backgroundColor = "rgb(255, " + g + ", " + r + ")"; // Cor de fundo gradual de acordo com a temperatura em Fahrenheit
      } else {
        document.body.style.backgroundColor = "#fff"; // Cor padrão de fundo
      }
    }
  }
  