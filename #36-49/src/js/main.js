'use strict'

document.addEventListener('DOMContentLoaded', function(){
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsParent = document.querySelector('.tabheader__items');


    function hideTabs(){
        tabsContent.forEach(tab => {
            tab.classList.add('hide');
        });
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTab(counter = 0){
        tabsContent[counter].classList.add('show-b');
        tabsContent[counter].classList.remove('hide');
        tabs[counter].classList.add('tabheader__item_active');
    }
    hideTabs();
    showTab();

    tabsParent.addEventListener('click', function(e){
        const target = e.target;
        const isTab = e.target.classList.contains('tabheader__item');
        if(isTab){
            tabs.forEach((item, i) => {
                if(item === target ){
                    hideTabs();
                    showTab(i);
                }
            })
        }
    });
});