function randomNoGenerator(min, max) {
    if(typeof(max) !== 'number' && typeof(min) !== 'number') {
        min = 0;  max = 1;
    }
    console.log('f1');
    console.log('f2');
    console.log('f3');
    return (Math.random() * (max-min)) + min;
}
module.exports = randomNoGenerator;

