module.exports =
    function repeater(str, options) {
        let obj = {
            rt: 1,
            sep: '+',
            add: "",
            addrt: 0,
            addsep: '|'
        }
        if (options.hasOwnProperty('repeatTimes')) { obj.rt = options.repeatTimes }
        if (options.hasOwnProperty('separator')) { obj.sep = String(options.separator) }
        if (options.hasOwnProperty('addition')) { obj.add = String(options.addition) }
        if (options.hasOwnProperty('additionSeparator')) { obj.addsep = String(options.additionSeparator) }
        if (options.hasOwnProperty('additionRepeatTimes')) { obj.addrt = options.additionRepeatTimes }
        str = String(str);
        if (obj.rt == 0) { return "" };
        let addstr = "";
        if (obj.addrt == 0) { addstr = ""; } else {
            addstr = obj.add;
            for (let i = 2; i <= obj.addrt; i++) {
                addstr = addstr + obj.addsep + obj.add;
            }
        }
        str = str + addstr;
        if (obj.rt == 1) { return str } else {
            let str1 = obj.sep + str;
            for (i = 2; i <= obj.rt; i++) {
                str = str + str1;
            }
        }
        return str;
    };
