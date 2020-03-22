module.exports =
    function transform(arr) {
        if (Array.isArray(arr)) {
            let arr1 = arr;
            let i = 1;
            if (arr1 == []) { return arr1; }

            if ((arr1[0] == "--discard-prev") || (arr1[0] == '--double-prev')) { arr1.splice(0, 1); }
            if ((arr1[arr1.length] == '--discard-next') || (arr1[arr1.length] == "--double-next")) { arr1.splice(arr1.length, 1); }
            while (i < (arr1.length - 1)) {
                if ((arr1[i - 1] == '--double-next' && arr1[i + 1] == '--discard-prev') ||
                    (arr1[i - 1] == '--discard-next' && arr1[i + 1] == '--double-prev')) {
                    arr1.splice(i - 1, 1);
                    arr1.splice(i, 1);
                } else {
                    i++;
                }
            }
            i = 1;
            while (i < arr1.length) {
                if (arr1[(i - 1)] == '--discard-next') { arr1.splice((i - 1), 2); } else {
                    i++;
                }
            }
            i = 1;
            while (i < arr1.length) {
                if (arr1[i - 1] == '--double-next') { arr1[i - 1] = arr1[i]; } else {
                    i++;
                }
            }
            i = 0;
            while (i < (arr1.length - 1)) {
                if (arr1[i + 1] == '--double-prev') { arr1[i + 1] = arr1[i]; } else {
                    i++;
                }
            }
            i = 0;
            while (i < (arr1.length - 1)) {
                if (arr1[i + 1] == '--discard-prev') { arr1.splice(i, 2); } else {
                    i++;
                }
            }
            for (i = 0; i < arr1.length; i++) {
                if (arr1[i] == '--discard-prev' || arr1[i] == '--double-prev' || arr1[i] == '--double-next' || arr1[i] == '--discard-next') { arr1.splice(i, 1); }
            }
            return arr1
        } else { throw Error }
    };
