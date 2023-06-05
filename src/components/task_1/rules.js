const romanToArabic = (roman) => {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0;
    let previousValue = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentValue = romanNumerals[roman[i]];
  
      if (currentValue >= previousValue) {
        result += currentValue;
      } else {
        result -= currentValue;
      }
  
      previousValue = currentValue;
    }
  
    return result;
  };

  const arabicToRoman = (number) => {
    const arabicNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" }
    ];
  
    let result = "";
  
    for (let i = 0; i < arabicNumerals.length; i++) {
      while (number >= arabicNumerals[i].value) {
        result += arabicNumerals[i].symbol;
        number -= arabicNumerals[i].value;
      }
    }
  
    return result;
  };

  export {romanToArabic, arabicToRoman};