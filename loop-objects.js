const clock = {
    name: 'Quartiz',
    color: 'Sky Blue',
    price: 150,
    isExpensive: false
}

for (const property in clock) {
    console.log(property, clock[property]);
}