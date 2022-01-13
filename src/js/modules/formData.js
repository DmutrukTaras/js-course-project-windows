import checkNumInputs from './checkNumInputs';

const forms = (state) => {

    'use strick';

    let form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name ="user_phone"]');

    let massage = {
        "loading": "Загрузка...",
        "success": "Дякую! З вами скоро зв'яжуться",
        "failure": "Щось пышло не так..."
    };

    let postData = async (url, data) => {
        document.querySelector('.status').textContent = massage.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    let clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMassage = document.createElement('div');
            statusMassage.classList.add('status');
            item.appendChild(statusMassage);

            let formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let k in state) {
                    formData.append(k, state[k]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMassage.textContent = massage.success;
                })
                .catch(() => {
                    statusMassage.textContent = massage.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMassage.remove();
                    }, 3000);
                });

        });
    });


};

export default forms;