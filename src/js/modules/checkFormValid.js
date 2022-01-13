const checkFormValid = () => {
    let checkFieldRequired = (checkSelector, btnSelector) => {
        let button = document.querySelector(btnSelector);
        button.disabled = true;
        let buttonDisable = [];

        for (let i = 0; i < checkSelector.length; i++) {
            buttonDisable[i] = true;
            let field = document.querySelectorAll(checkSelector[i][0]);

            field.forEach((item, j) => {
                item.addEventListener(checkSelector[i][1], () => {

                    switch (item.nodeName) {
                        case 'INPUT':
                            if (item.value != '') {
                                buttonDisable[i] = false;
                            } else {
                                buttonDisable[i] = true;
                            }

                            break;
                        case 'SPAN':
                            buttonDisable[i] = false;
                            break;
                        case 'DIV':
                            buttonDisable[i] = false;
                            break;

                    }
                    if (!buttonDisable.includes(true)) {
                        button.disabled = false;
                    };
                });
            });
        }
    };

    checkFieldRequired([
        ['#width', 'input'],
        ['#height', 'input'],
        ['.balcon_icons_img', 'click']
    ], '.popup_calc_button');
    checkFieldRequired([
        ['.checkbox', 'change']
    ], '.popup_calc_profile_button');


    let checkFieldRequiredByBtn = (checkSelector, btnSelector) => {
        let button = document.querySelector(btnSelector);
        button.disabled = true;
        button.addEventListener('click', (e) => {

        });



    }

};

export default checkFormValid;