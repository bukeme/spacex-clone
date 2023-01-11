const firstSection = document.querySelector('section')
const stats = document.querySelector('.falcon-9-section-b__stats')
const statsTitle = document.querySelectorAll('.falcon-9-section-b__stats--item__title')






function allowCount() {
	const statsTop = stats.getBoundingClientRect().top;
	const statsHeight = stats.getBoundingClientRect().height 
	
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
	allowCount()
})