namespace RC {
	const COMMON_DISTANCES = [
		"10 km",
		"100 km",
		"100 mi",
		"400 m",
		"800 m",
		"1000 m",
		"1500 m",
		"marathon",
		"42195 m",
		"42.2 km",
		"26.2 mi",
		"half marathon",
		"21097.5 m",
		"21.1 km",
		"13.1 mi",
	];

	export function getDistancesFromQuery(query: string): string[] {
		let distances: string[] = [];

		// TODO: "5k" should match "5 km", but not "5 mi"

		const measure = parseFloat(query);
		if (!isNaN(measure)) // there is also jQuery.isNumeric()
		{
			if (measure < 100) {
				distances.push(measure + " km");
				distances.push(measure + " mi");
			}
			else if (measure > 100) {
				distances.push(measure + " m");
			}
			else {
				distances.push(measure + " m");
				distances.push(measure + " km");
				distances.push(measure + " mi");
			}
		}

		return _.filter(
			_.uniq(distances.concat(COMMON_DISTANCES)),
			(el) => _.startsWith(el.toLowerCase(), query.toLowerCase())
		);
	}
}

$(document).ready(function() {
	$(".ui.search").search({
		maxResults: 5,
		apiSettings: {
			responseAsync: function(settings, callback) {
				let response = {
					success: true,
					results: []
				};

				const distances = RC.getDistancesFromQuery(settings.urlData.query);
				for (let distance of distances) {
					response.results.push({
						title: distance
					});
				}

				setTimeout(() => { callback(response); }, 1);
			}
		}
	});
});
