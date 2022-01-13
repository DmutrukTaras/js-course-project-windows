const tabs = () => {
    function tab(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {
        let header = document.querySelector(headerSelector),
            tabsLink = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);


        function hideTabContent() {
            for (let i = 0; i < content.length; i++) {
                content[i].classList.add('hide');
            }
            for (let i = 0; i < tabsLink.length; i++) {
                tabsLink[i].classList.remove(activeClass);
            }

        }

        hideTabContent();
        showTabContent();

        function showTabContent(b = 0) {
            if (content[b].classList.contains('hide')) {
                content[b].style.display = display;
                content[b].classList.remove('hide');
            }
            tabsLink[b].classList.add(activeClass);

        }

        header.addEventListener('click', function (e) {
            if ((e.target.classList.contains(tabSelector.replace(/\./, ""))) ||
                (e.target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                for (let i = 0; i < tabsLink.length; i++) {
                    if ((e.target == tabsLink[i]) || (e.target.parentNode == tabsLink[i])) {
                        hideTabContent();
                        showTabContent(i);
                        break;
                    }
                }
            }
        });

    }

    tab('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tab('.decoration_slider ', '.no_click', '.decoration_content>div>div', 'after_click');
    tab('.balcon_icons', '.balcon_icons_img', '.big_img>img', 'do_image_more', 'inline-block');

}




export default tabs;