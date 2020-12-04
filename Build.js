const failedTest = ({ failure } = obj) => {
    console.log(Math.pow(5, 4));
    console.log(2 ** 3 ** 2);
    return failure;

};



module.exports = {
    failedTest
};