const Firstnum = 20;
const secondnum = 40;

function bigoftwo(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num2;
}

const smalloftwo = (num1, num2) => {
    if (num1 < num2)
        return num1;
    else
        return num2;
};

module.exports = { Firstnum, secondnum, bigoftwo, smalloftwo };
