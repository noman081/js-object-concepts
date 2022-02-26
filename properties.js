const clock = {
    name: 'Quartiz',
    color: 'Sky Blue',
    price: 150,
    isExpensive: false
}
//keys function
const keys = Object.keys(clock);
console.log(keys);
//2. values function
const values = Object.values(clock);
console.log(values);
//3. entries function
const pairs = Object.entries(clock);
console.log(pairs);
//5. seal function
Object.seal(clock);
//6. freeze function
Object.freeze(clock);
clock.isExpensive = true;
//4. delete function
delete clock.isExpensive;
console.log(clock);