const budgetLine = new ProgressBar.Line('#budgetLine', {
	strokeWidth: 10,
	trailColor: '#2fbf71',
	color: '#3d348b',
});

budgetLine.animate(0.67, {easing: 'easeInOut'});

const codingLine = new ProgressBar.Line('#codingLine', {
	strokeWidth: 7,
	color: '#067bc2',
	trailColor: '#d9d9d9',
});

codingLine.animate(0.67, {easing: 'easeInOut'});

const waterLine = new ProgressBar.Line('#waterLine', {
	strokeWidth: 7,
	color: '#067bc2',
	trailColor: '#d9d9d9',
});

waterLine.animate(0.5, {easing: 'easeInOut'});

const studyLine = new ProgressBar.Line('#studyLine', {
	strokeWidth: 7,
	color: '#067bc2',
	trailColor: '#d9d9d9',
});

studyLine.animate(0.86, {easing: 'easeInOut'});

const walkLine = new ProgressBar.Line('#walkLine', {
	strokeWidth: 7,
	color: '#067bc2',
	trailColor: '#d9d9d9',
});

walkLine.animate(0.33, {easing: 'easeInOut'});