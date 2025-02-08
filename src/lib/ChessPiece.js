export class ChessPiece {
	#location;
	#color;
	#id;
	constructor(sprite, id, location, color) {
		this.sprite = sprite;
		this.#id = id;
		this.#location = location;
		this.#color = color;
	};
	setStyle() {
		return { width: '100px', 'top': '20%' };
	};

	init() {

		const img = document.createElement("img");
		img.src = this.sprite;
		const { width, top } = this.setStyle();
		img.style.width = width;
		img.style.top = top;

		const div = document.createElement("div");
		div.id = this.#id;
		div.dataset.color = this.#color;
		div.draggable = true;
		div.ondragstart = (event) => {
			const target = event.target.parentNode;
			event.dataTransfer.setData("id", target.id);
			event.dataTransfer.setData("color", target.getAttribute('data-color'));
		};
		div.src = this.sprite
		div.classList.add('piece')
		div.appendChild(img)
		return div
	};

	get coordinate() {
		return this.#location
	};

	set coordinate(newLocation) {
		this.#location = newLocation
	};
};

export class Pawn extends ChessPiece {
	constructor(sprite, id, location, color) {
		super(sprite, id, location, color)
	}
	setStyle() {
		return { width: '100px', 'top': '20%' }
	}
}
export class Bishop extends ChessPiece {
	constructor(sprite, id, location, color) {
		super(sprite, id, location, color)
	}
	setStyle() {
		return { width: '70px', 'top': '-10%' }
	}
}

export class Queen extends ChessPiece {
	constructor(sprite, id, location, color) {
		super(sprite, id, location, color)
	}
	setStyle() {
		return { width: '70px', 'top': '-10%' }
	}
}

export class King extends ChessPiece {
	constructor(sprite, id, location, color) {
		super(sprite, id, location, color)
	}
	setStyle() {
		return { width: '120px', 'top': '-25%' }
	}
}

export class Rook extends ChessPiece {
	constructor(sprite, id, location, color) {
		super(sprite, id, location, color)
	}
	setStyle() {
		return { width: '100px', 'top': '10%' }
	}
}
export class Knight extends ChessPiece {
	constructor(sprite, id, location, color) {
		super(sprite, id, location, color)
	}
	setStyle() {
		return { width: '150px', 'top': '10%' }
	}
}
