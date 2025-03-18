// Von Omeeed
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

console.log("IP 192.168.1.1 in Binär:", decimalToBinary(192) + '.' + decimalToBinary(168) + '.' + decimalToBinary(1) + '.' + decimalToBinary(1));

function convertToBinary() {
    const input = prompt("Geben Sie eine Dezimalzahl ein:");
    if (input !== null) {
        alert(`Die Binärdarstellung von ${input} ist: ${decimalToBinary(parseInt(input, 10))}`);
    }
}
