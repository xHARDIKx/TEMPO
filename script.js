// Function to convert temperature
function convert() {
    // Get input values
    var temperature = parseFloat(document.getElementById('temperature').value);
    var fromUnit = document.getElementById('unit').value;
    var toUnit = document.getElementById('conversion').value;

    // Perform conversion based on selected units
    var result;
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (temperature * 9 / 5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (temperature - 32) * 5 / 9;
    } else if (fromUnit === 'celsius' &&  toUnit === 'kelvin') {
        result = temperature + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (temperature + 459.67) * 5 / 9;
    } else if (fromUnit === 'celsius' && toUnit === 'rankine') {
        result = (temperature + 273.15) * 9 / 5;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'rankine') {
        result = temperature + 459.67;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = temperature - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (temperature * 9 / 5) - 459.67;
    } else if (fromUnit === 'kelvin' && toUnit === 'rankine') {
        result = temperature * 9 / 5;
    } else if (fromUnit === 'rankine' && toUnit === 'celsius') {
        result = (temperature - 491.67) * 5 / 9;
    } else if (fromUnit === 'rankine' && toUnit === 'fahrenheit') {
        result = temperature - 459.67;
    } else if (fromUnit === 'rankine' && toUnit === 'kelvin') {
        result = temperature * 5 / 9;
    } else if (fromUnit === 'celsius' && toUnit === 'celsius') {
        result = temperature;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'fahrenheit') {
         result = temperature;
    }else if (fromUnit === 'kelvin' && toUnit === 'kelvin') {
        result = temperature;
    }else if (fromUnit === 'rankine' && toUnit === 'rankine') {
        result = temperature;
        }
    

    // Display result
    document.getElementById('result').value = result.toFixed(2);
}

function clearFields() {
    document.getElementById('temperature').value = '';
    document.getElementById('result').value = '';
}

function convert() {
    // ... (your existing code) ...

    // Get the selected conversion units
    var fromUnit = document.getElementById('unit').value;
    var toUnit = document.getElementById('conversion').value;

    // Determine the used formula
    var usedFormula = getUsedFormula(fromUnit, toUnit);

    // Display the result and used formula
    document.getElementById('result').value = result.toFixed(2);
    document.getElementById('usedFormula').textContent = "Used Formula: " + usedFormula;
}

function convert() {
    // Get the temperature value and units
    var temperature = parseFloat(document.getElementById('temperature').value);
    var fromUnit = document.getElementById('unit').value;
    var toUnit = document.getElementById('conversion').value;

    // Calculate the result
    var result;

    switch (fromUnit) {
        case 'celsius':
            switch (toUnit) {
                case 'fahrenheit':
                    result = (temperature * 9/5) + 32;
                    break;
                case 'kelvin':
                    result = temperature + 273.15;
                    break;
                case 'rankine':
                    result = (temperature * 9/5) + 491.67;
                    break;
                case 'reaumur':
                    result = temperature * 4/5;
                    break;
            }
            break;
        case 'fahrenheit':
            switch (toUnit) {
                case 'celsius':
                    result = (temperature - 32) * 5/9;
                    break;
                case 'kelvin':
                    result = (temperature + 459.67) * 5/9;
                    break;
                case 'rankine':
                    result = temperature + 459.67;
                    break;
                case 'reaumur':
                    result = (temperature - 32) * 4/9;
                    break;
            }
            break;
        case 'kelvin':
            switch (toUnit) {
                case 'celsius':
                    result = temperature - 273.15;
                    break;
                case 'fahrenheit':
                    result = (temperature * 9/5) - 459.67;
                    break;
                case 'rankine':
                    result = temperature * 9/5;
                    break;
                case 'reaumur':
                    result = (temperature - 273.15) * 4/5;
                    break;
            }
            break;
        case 'rankine':
            switch (toUnit) {
                case 'celsius':
                    result = (temperature - 491.67) * 5/9;
                    break;
                case 'fahrenheit':
                    result = temperature - 459.67;
                    break;
                case 'kelvin':
                    result = temperature * 5/9;
                    break;
                case 'reaumur':
                    result = (temperature - 491.67) * 4/9;
                    break;
            }
            break;
        case 'reaumur':
            switch (toUnit) {
                case 'celsius':
                    result = temperature * 5/4;
                    break;
                case 'fahrenheit':
                    result = (temperature * 9/4) + 32;
                    break;
                case 'kelvin':
                    result = (temperature * 5/4) + 273.15;
                    break;
                case 'rankine':
                    result = (temperature * 9/4) + 491.67;
                    break;
            }
            break;
    }

    // Display the result
    document.getElementById('result').value = result.toFixed(2);

    // Determine the used formula and display it
    var usedFormula = getUsedFormula(fromUnit, toUnit);
    document.getElementById('usedFormula').textContent = "Used Formula: " + usedFormula;
}

// Function to get the used formula based on conversion units
function getUsedFormula(fromUnit, toUnit) {
    switch (fromUnit) {
        case 'celsius':
            switch (toUnit) {
                case 'fahrenheit':
                    return '°F = °C × 9/5 + 32';
                case 'kelvin':
                    return 'K = °C + 273.15';
                case 'rankine':
                    return '°R = °C × 9/5 + 491.67';
                
            }
            break;
        case 'fahrenheit':
            switch (toUnit) {
                case 'celsius':
                    return '°C = (°F - 32) × 5/9';
                case 'kelvin':
                    return 'K = (°F + 459.67) × 5/9';
                case 'rankine':
                    return '°R = °F + 459.67';
                
            }
            break;
        case 'kelvin':
            switch (toUnit) {
                case 'celsius':
                    return 'C = K - 273.15';
                case 'fahrenheit':
                    return 'F = (K * 9/5) - 459.67';
                case 'rankine': 
                    return 'R = K * 9/5';
                    }
                    break;
             case 'rankine':
                    switch (toUnit) {
            case 'celsius':
                    return 'C = (R - 491.67) * 5/9';
            case 'fahrenheit':
                    return 'F = R - 459.67';
            case 'kelvin':
                    return 'K = R * 5/9';
          
                    }
            break;
                    
                    
                }
            }
            document.addEventListener('DOMContentLoaded', function() {
                const links = document.querySelectorAll('.nav-but a');
            
                links.forEach(function(anchor) {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault();
            
                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                            behavior: 'smooth'
                        });
                    });
                });
            });

            function scrollToHome() {
                document.getElementById('home').scrollIntoView({ behavior:  'auto' });
            }
            function refreshPage() {
                location.reload(); // This reloads the page
            }
            