document.addEventListener('DOMContentLoaded', function() {
	var form = document.querySelector('#form');
	var submitBtn = document.querySelector('#form-submit');
	// submitBtn.addEventListener('click', function() {
	// 	form.submit();
	// });
	form.addEventListener('submit', function(e) {
		var fields = this.querySelectorAll('.req');
		var isValid = true;
		[].forEach.call(fields, function(field) {
			switch(field.getAttribute('data-type')) {
				case 'checkbox':
					field.parentNode.classList.remove('error');
					if(!field.checked) {
						isValid = false;
						field.parentNode.classList.add('error');
					}
					break;
				default:
					field.classList.remove('error');
					if(!field.value.length) {
						isValid = false;
						field.classList.add('error');
					}
			}
		});
		if(!isValid) e.preventDefault();
	});

	var toggleBlocks = document.querySelectorAll('.js-toggle');
	if(toggleBlocks.length) {
		[].forEach.call(toggleBlocks, function(block) {
			block.addEventListener('click', function(e) {
				e.preventDefault();
				var classList = e.target.classList;
				if(!classList.contains('js-toggle-btn')) return
				if(e.target.nodeType != 1) return;
				var content = this.querySelector('.js-toggle-content'),
						btns = this.querySelectorAll('.js-toggle-btn');
				if(classList.contains('js-toggle-show')) {
					content.classList.remove('hidden');
				} else if(classList.contains('js-toggle-hide')) {
					content.classList.add('hidden');
				}
				[].forEach.call(btns, function(btn) {
					btn.classList.toggle('hidden');
				});
			});
		});
	}

	var scrollBtns = document.querySelectorAll('.js-scroll');
	var scrollTarget = document.getElementById('form-block');
	if(scrollBtns.length) {
		[].forEach.call(scrollBtns, function(btn) {
			btn.addEventListener('click', function() {
				scrollTo(scrollTarget);
			});
		});
	}

});

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.getBoundingClientRect().top + window.scrollY
  });
}