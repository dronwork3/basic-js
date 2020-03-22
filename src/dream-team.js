module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let obj1 = new Object();
    let i = 0;
    let a = 0;
    while (i < members.length) {
      if (typeof (members[i]) == "string") {
        members[i] = members[i].trim()[0].toUpperCase();
        i++;
      } else {
        members.splice(i, 1);
      }
    }
    let str = members.sort().join("");
    if (str == "") { return false; } else {
      return str;
    }
  } else { return false; }
};
