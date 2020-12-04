const failedTest = ({ failure } = obj) => {
    const math = Math.pow(5, 4);
    console.log(math)
    return failure, math;

};



module.exports = {
    failedTest
};