const firstSection = document.querySelector('section');
const stats = document.querySelector('.falcon-9-section-b__stats');
const statsTitle = document.querySelectorAll('.falcon-9-section-b__stats--item__title');
const overviewCarousel = document.querySelector('.falcon-9-section-b__overview--carousel-container__carousel');
const overviewCarouselBtns = document.querySelectorAll('.falcon-9-section-b__overview .carousel-btn');
const overviewCarouselLeftBtn = document.querySelector('.falcon-9-section-b__overview--carousel-container__icon-container--icon-left');
const overviewCarouselRightBtn = document.querySelector('.falcon-9-section-b__overview--carousel-container__icon-container--icon-right')
const overviewCarouselIndicators = document.querySelectorAll('.falcon-9-section-b__overview--carousel-container__indicator-container--indicator');
const overviewCarouselList = document.querySelectorAll('.falcon-9-section-b__overview--carousel-container__carousel--item');
const carousel_1_navLink_1 = document.querySelectorAll('.falcon-9-section-b__overview--carousel-container__carousel--item__nav-menu--nav-item__nav-link.nav-menu-1__nav-item--nav-link')
const carousel_1_navLink_2 = document.querySelectorAll('.falcon-9-section-b__overview--carousel-container__carousel--item__nav-menu--nav-item__nav-link.nav-menu-2__nav-item--nav-link')
const carousel_1_content_1 = document.querySelectorAll('.falcon-9-section-b__overview--carousel-container__carousel--item__content-container--content.content-1')
const carousel_1_content_2 = document.querySelectorAll('.falcon-9-section-b__overview--carousel-container__carousel--item__content-container--content.content-2')







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

let pos1 = 0;

function moveCarouselItems(pos, carousel, btns) {
	btns.forEach(btn => btn.classList.remove('disabled'));
	const carouselItem = carousel.children[pos];
	carousel.style.transform = `translateX(-${carouselItem.style.left})`;
	overviewCarouselIndicators.forEach(function(indicator) {
		indicator.classList.remove('active');
	});
	overviewCarouselIndicators[pos].classList.add('active');
	if (pos === 0) {
		btns[0].classList.add('disabled')
	} else if (pos === carousel.children.length - 1) {
		btns[1].classList.add('disabled')
	}
};

overviewCarouselLeftBtn.addEventListener('click', function() {
	if (pos1 === 0) return;
	pos1--;
	moveCarouselItems(pos1, overviewCarousel, overviewCarouselBtns);
});

overviewCarouselRightBtn.addEventListener('click', function() {
	if (pos1 === overviewCarousel.children.length - 1) return;
	pos1++;
	moveCarouselItems(pos1, overviewCarousel, overviewCarouselBtns);
});

overviewCarouselIndicators.forEach(function(indicator) {
	indicator.addEventListener('click', function() {
		const pos = +this.dataset.pos;
		pos1 = pos;
		moveCarouselItems(pos, overviewCarousel, overviewCarouselBtns);
	});
});


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
displayNavContent(carousel_1_navLink_2, carousel_1_content_2);