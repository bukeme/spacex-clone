const firstSection = document.querySelector('section');
const stats = document.querySelector('.falcon-9-section-b__stats');
const statsTitle = document.querySelectorAll('.falcon-9-section-b__stats--item__title');
const overviewCarouselList = document.querySelectorAll('.falcon-9-section-b__overview--carousel-1-container__carousel-1--item');
const carousel_1_navLink_1 = document.querySelectorAll('.falcon-9-section-b__overview--carousel-1-container__carousel-1--item__nav-menu-1--nav-item__nav-link')
const carousel_1_content_1 = document.querySelectorAll('.falcon-9-section-b__overview--carousel-1-container__carousel-1--item__content-1-container--content')







function allowCount() {
	const statsTop = stats.getBoundingClientRect().top;
	const statsHeight = stats.getBoundingClientRect().height;
	
	statsTitle.forEach(function(title) {
		if (statsTop <= window.innerHeight - 50 && statsTop > -(statsHeight-50)) {
			function countUpStats() {
				const titleStat = +title.dataset.stat;
				const titleValue = +title.textContent;
				if (titleValue < titleStat) {
					title.textContent = titleValue+1
					setTimeout(countUpStats, 20)
				};
			};
			countUpStats();
		} else {
			title.textContent = 0;
		};
	});
};

allowCount();

window.addEventListener('scroll', function() {
	allowCount();
})

function alignCarouselItems(list) {
	const listItemWidth = list[0].getBoundingClientRect().width;
	list.forEach(function(item, index) {
		item.style.left = `${index * listItemWidth}px`;
	});
};

alignCarouselItems(overviewCarouselList);



function displayNavContent(navLinks, contents) {
	navLinks.forEach(function(navLink) {
		navLink.addEventListener('click', function() {
			navLinks.forEach(function(link) {
				link.classList.remove('active');
			});
			this.classList.add('active');
			const content_id = this.dataset.content;
			contents.forEach(function(content) {
				content.classList.remove('show-content');
			});
			document.getElementById(content_id).classList.add('show-content');
			const background = this.dataset.background;
			this.parentElement.parentElement.parentElement.style.backgroundImage = `url('${background}')`
		});
	});
};

displayNavContent(carousel_1_navLink_1, carousel_1_content_1);