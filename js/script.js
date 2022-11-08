
// Menu Burger =========================================
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", () => {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    });
}

// Прокрутка при клике =================================

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });
}
function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top //pageYOffset - document.querySelector('header').offsetHeight;

        if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}
//======================================================
function togglePrice() {
	const billing = document.querySelector('.billing');
	const billingItems = document.querySelectorAll('.billing__item')

	billing.addEventListener('click', () => {
		billing.classList.toggle('active')

		if (!billing.classList.contains('active')) {
			billingItems[0].classList.add('active')
			billingItems[2].classList.remove('active')
		}
		else {
			billingItems[0].classList.remove('active')
			billingItems[2].classList.add('active')
		}
	})
}
togglePrice();

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
	  this.classList.toggle("active");
	  let panel = this.nextElementSibling;
	  if (panel.style.maxHeight){
		panel.style.maxHeight = null;
	  } else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	  } 
	});
  }

  document.querySelectorAll('.accordion__item-trigger').forEach(elem => {
	elem.addEventListener('click', ()=>{
		let parent = elem.parentNode;
		if(parent.classList.contains('accordion__item_active')){
			parent.classList.remove('accordion__item_active')
		}else{
			document.querySelectorAll('.accordion__item').forEach(item => {
				item.classList.remove('accordion__item_active')
				parent.classList.add('accordion__item_active');

			})
		}
	  })
  })

