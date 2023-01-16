const firstSection = document.querySelector('section');
const stats = document.querySelector('.falcon-9-section-b__stats');
const statsTitle = document.querySelectorAll('.falcon-9-section-b__stats--item__title');
const overviewCarouselList = document.querySelectorAll('.falcon-9-section-b__overview--carousel-container__carousel--item');






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