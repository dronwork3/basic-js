module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj1 = new Object();
    obj1.turns = Math.pow(2, disksNumber) - 1;
    obj1.seconds = obj1.turns / (turnsSpeed / 3600);
    return obj1;
}