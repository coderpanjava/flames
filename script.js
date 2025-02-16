document.getElementById('flamesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name1 = document.getElementById('name1').value.toLowerCase();
    const name2 = document.getElementById('name2').value.toLowerCase();
    const resultElement = document.getElementById('result');
    const flames = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings'];

    const name1Filtered = name1.replace(/[^a-z]/g, '');
    const name2Filtered = name2.replace(/[^a-z]/g, '');

    let name1Array = name1Filtered.split('');
    let name2Array = name2Filtered.split('');

    name1Array.forEach(char => {
        if (name2Array.includes(char)) {
            name2Array.splice(name2Array.indexOf(char), 1);
        }
    });

    const remainingLength = name1Array.length + name2Array.length;
    const flamesIndex = (remainingLength % flames.length) - 1;

    const result = flamesIndex >= 0 ? flames[flamesIndex] : flames[flames.length - 1];
    resultElement.textContent = `The relationship between ${name1} and ${name2} is: ${result}`;
});
