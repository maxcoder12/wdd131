const t = parseInt(document.querySelector("#temperature").textContent);
const v = parseInt(document.querySelector("#wind").textContent);
document.querySelector("#conditions").textContent = "Partly Cloudy";
const windChillFormula = 13.12 + 0.6215 * t - 11.37 * (v ** 0.16) + 0.3965 * t * (v ** 0.16);

function calculateWindChill(){
    if (t <= 10 && v > 4.8){
        return windChillFormula.toFixed(4) + " °C.";
    } else {
        return "N/A";
    }
};

const windChill = calculateWindChill();

document.querySelector("#windChill").textContent = windChill;

const today = new Date();

const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified")


const fullYear = today.getFullYear()

const lastModification = document.lastModified

currentYear.textContent = fullYear
lastModified.textContent = `Last Modification: ${lastModification}`
