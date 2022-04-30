const budgetCanvas = document.getElementById('budgetChart');
const budgetChart = new Chart(budgetCanvas, {
	type: 'pie',
	data: {
		labels: ['Spent', 'Remaining'],
		datasets: [{
			label: 'This month',
			data: [2000, 1000],
			backgroundColor: ['rgb(235,49,86)', 'rgb(47,191,113)']
		}]
	},
	options: {
		//cutout: "70%"
		plugins: {
			legend: {
				display: false,
			}
		}
	}
})