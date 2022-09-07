function randomNoGenerator(min, max) {
    if(typeof(max) !== 'number' && typeof(min) !== 'number') {
        min = 0;  max = 1;
    }
    console.log('a');
    console.log('b');
    return (Math.random() * (max-min)) + min;
}
module.exports = randomNoGenerator;

console.log('final');
