const checkNumInputs = (numSelector) => {
    let numInputs = document.querySelectorAll(numSelector);
    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, "")
        });
    });
};



export default checkNumInputs;