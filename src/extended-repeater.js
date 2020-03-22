module.exports = function repeater(str, options) {

    let {repeatTimes = 1, separator = '+', addition = "", additionRepeatTimes = 1, additionSeparator = '|'} = options;
    let result = '';

    for (let i = 0; i < repeatTimes; i++) {
        result += str;
        for (let j = 0; j < additionRepeatTimes; j++) {
            result += addition;
            if (j + 1 < additionRepeatTimes) {
                result += additionSeparator;
            }
        }
        if (i + 1 < repeatTimes) {
            result += separator;
        }
    }
    return result;
};