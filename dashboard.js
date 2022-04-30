const budgetLine = new ProgressBar.Line('#budgetLine', {
	strokeWidth: 10,
	trailColor: '#2fbf71',
	color: '#3d348b',
});

budgetLine.animate(0.67, {easing: 'easeInOut'});