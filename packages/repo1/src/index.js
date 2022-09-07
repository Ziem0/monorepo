function randomNoGenerator(min, max) {
    if(typeof(max) !== 'number' && typeof(min) !== 'number') {
        min = 0;  max = 1;
    }
    console.log(2);
    return (Math.random() * (max-min)) + min;
}
module.exports = randomNoGenerator;

