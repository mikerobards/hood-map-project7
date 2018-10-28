// FourSquareAPI using fetch

class FourSquare {
	static bURL() {
		return "https://api.foursquare.com/v2";
	}
	static auth() {
		const keys = {
			client_id: "GA3VKCI5IWBQQIILIG202I1FK34A1WFIRBIVHWOFKYMDQSPQ",
			client_secret: "OOPUMDBXVOEZ10CC4Y0GGAH3PIYL0HTFDFX3ILJFPI2SZIPL",
			v: "20180930"
		};
		return Object.keys(keys)
			.map(key => `${key}=${keys[key]}`)
			.join("&");
	}
	static urlBuild(url) {
		if (!url) {
			return "";
		} else {
			return Object.keys(url)
				.map(key => `${key}=${url[key]}`)
				.join("&");
		}
	}
	static head() {
		return {
			Accept: "application/json"
		};
	}
	static simFetch(end, method, url, error) {
		let requestData = {
			method,
			headers: FourSquare.head()
		};
		return fetch(`${FourSquare.bURL()}${end}?${FourSquare.auth()}&${FourSquare.urlBuild(url)}`, requestData)
			.then(response => response.json())
			.catch(error => {
				console.log(error);
			});
	}
}

export default class foursquareAPI {
	static search(url) {
		return FourSquare.simFetch("/venues/search", "GET", url);
	}
	static getVenueDetails(VENUE_ID) {
		return FourSquare.simFetch(`/venues/${VENUE_ID}`, "GET");
	}
	static getVenuePhoto(VENUE_ID) {
		return FourSquare.simFetch(`/venues/${VENUE_ID}/photos`, "GET");
	}
}
