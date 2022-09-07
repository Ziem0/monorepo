function randomNoGenerator(min, max) {
    if(typeof(max) !== 'number' && typeof(min) !== 'number') {
        min = 0;  max = 1;
    }
    console.log('a');
    return (Math.random() * (max-min)) + min;
}
module.exports = randomNoGenerator;

