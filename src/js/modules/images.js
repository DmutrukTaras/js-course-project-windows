const images = () => {
    let imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.appendChild(bigImage);

    imgPopup.style.justifyContent = "center";
    imgPopup.style.textAlign = "center";
    imgPopup.style.display = "none";

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = "flex";
            document.body.style.overflow = "hidden";
            let imageSrc = e.target.parentNode.getAttribute('href');
            bigImage.style.height = '90vh';
            bigImage.style.margin = "5vh 0";

            bigImage.setAttribute('src', imageSrc);
        }
        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = "none";
            document.body.style.overflow = "";
        }
    });




};


export default images;