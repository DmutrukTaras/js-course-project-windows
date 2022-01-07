function openModal(){
    'use strick';
    let modalPopupEngineer = document.getElementById('popup_engineer'),
    btnPopupEngineer = document.querySelector('.popup_engineer_btn'),
    btnPopupEngineerClose = document.getElementById('popup_engineer_close');

    btnPopupEngineer.addEventListener('click', function(){
        modalPopupEngineer.style.display='flex';
    });
    btnPopupEngineerClose.addEventListener('click', function(){
        modalPopupEngineer.style.display='none';
    });

}

export default openModal();