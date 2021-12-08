function initTabNav(){
    let tabmenu = document.querySelectorAll('.js-tabmenu li');
    let tabcontent = document.querySelectorAll('.js-tabcontent section');

    if (tabmenu.length && tabcontent.length){
        function activetab(index){
            tabcontent.forEach((section)=>{
                section.classList.remove('ativo');
            });
           console.log(tabcontent[index])
            const  direcao = tabcontent[index].dataset.anime;
            tabcontent[index].classList.add('ativo', direcao);
        };


        tabmenu.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                activetab(index);
               
            } )

        });

        tabcontent[0].classList.add('ativo');
        
    }
};
initTabNav();
function initFaq(){
    const nav = document.querySelector('dl');
    nav.classList.add("js-accordion")
    const classAtivo = 'Ativo'

    const accordionList = document.querySelectorAll('.js-accordion dt');
    if (accordionList.length){
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');

        function activeAccordion(event){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionList.forEach((item)=>{
            item.addEventListener('click', activeAccordion);
        });
    }
}
initFaq();

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');
    

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        let section = document.querySelector(href);
    
    section.scrollIntoView({
            behavior:'smooth',
            block: 'start',
    });

    /*
        const topo =section.offsetTop;
        window.scrollTo({
            top = topo,
            behavior:'smooth',
        }); */
    }

    linksInternos.forEach((link)=>{
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSuave();

function animaScroll(){
    const scrollAnima = document.querySelectorAll('.js-scroll');
    if (scrollAnima.length){
        const altura = window.innerHeight*0.6;

        function animaScroll(){
            scrollAnima.forEach((section)=>{
                const sectionTop= section.getBoundingClientRect().top -altura;
                if (sectionTop < 0){
                section.classList.add('ativo');}
                else{
                    section.classList.remove('ativo')
                }
            })
        };


        window.addEventListener('scroll', animaScroll);}
};
animaScroll();