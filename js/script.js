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

  document.querySelectorAll('.accor__item-trigger').forEach(elem => {
	elem.addEventListener('click', ()=>{
		let parent = elem.parentNode;
		if(parent.classList.contains('accor__item_active')){
			parent.classList.remove('accor__item_active')
		}else{
			document.querySelectorAll('.accor__item').forEach(item => {
				item.classList.remove('accor__item_active')
				parent.classList.add('accor__item_active');

			})
		}
	  })
  })
