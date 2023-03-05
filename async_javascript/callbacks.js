const stepOne = (callStepTwo) => {
    console.log('Step One');
    callStepTwo();
}

const stepTwo = () => {
    console.log('Step Two');
}

stepOne(stepTwo);