export function makeCellActive(event, children) {
	event.preventDefault();
	if (event.target.id) {
		const searhMatch = () => {
			const match = Array.from(children).find((cell) => cell.id === event.target.id)
			if (match) match.classList.add('hover')
		}
		searhMatch()
	};
}

export function makeCellInactive(event, children) {
	event.preventDefault();
	if (event.target.id) {
		const searhMatch = () => {
			const match = Array.from(children).find((cell) => cell.id === event.target.id)
			if (match) match.classList.remove('hover')
		}
		searhMatch()
	};
}
