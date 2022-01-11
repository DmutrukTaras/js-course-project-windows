function test() {
    'use strick';
    console.log('modal.js');

}

const modals = () => {
    function bindModal(trigerSelector, modalSelector, closeSelector) {

        let triger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        triger.forEach(item => {
            item.addEventListener('click', function (e) {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        });
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time);
    }

    bindModal('a.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    showModalByTime('.popup', 60000);

};

let mod = {
    modals,
    test
};

export default mod;