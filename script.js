class Board {
	#whitePiece
	#blackPeice
	#initializePiece(piece) {
		const children = this.board.children;
		for (let i = 0; i < piece.length; i++) {
			for (let j = 0; j < children.length; j++) {
				const targetPiece = piece[i];
				if (piece[i].location === children.item(j).id) {
					const asset = (color, type) => {
						return `./assets/chess-${type}-${color}.png`
					}
					const pawn = new ChessPiece(asset(targetPiece.color, targetPiece.type), targetPiece.id, targetPiece.location, targetPiece.color);
					children.item(j).appendChild(pawn.init());
				};
			};
		};
	}

	constructor(whitePiece, blackPeice, board) {
		this.#whitePiece = whitePiece
		this.#blackPeice = blackPeice
		this.board = board
	}
	init() {
		const coordinate = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8 }
		for (let i = 0; i < 8; i++) {
			const vertical = Object.keys(coordinate).find(key => coordinate[key] === i + 1)

			for (let j = 0; j < 8; j++) {
				const cell = document.createElement('div')
				cell.setAttribute('id', `${vertical}${j + 1}`)
				cell.ondrop = (event) => {
					{
						event.preventDefault();
						var data = event.dataTransfer.getData("id");
						var color = event.dataTransfer.getData("color");
						const draggedElement = document.getElementById(data);
						const cell = event.target

						// Early return of tying to raplce the piece color
						if (cell.tagName === 'IMG') {
							if (draggedElement.getAttribute('data-color') === color) return
						}

						const targetPieceColorMove = () => {
							if (color === 'black') {
								return this.#blackPeice
							} else if (color === 'white') {
								return this.#whitePiece
							}
						}

						targetPieceColorMove().map((piece) => {
							if (piece.id === data) {
								if (event.target.id.length === 2) {
									piece.location = event.target.id
								} else {
									piece.location = event.target.parentNode.id
								}

							}
						})

						if (cell.id.length === 2) {
							cell.appendChild(draggedElement);
						} else {
							cell.parentNode.replaceChild(draggedElement, cell)
						}

						const target = targetPieceColorMove().find((piece) => piece.id === data)
						console.log(target)
					}
				}
				cell.ondragover = (event) => { event.preventDefault() }
				cell.classList.add('cell')

				if (((i % 8) % 2 === 0)) {
					cell.classList.add(j % 2 === 0 ? 'black' : 'white')
				} else {
					cell.classList.add(j % 2 === 0 ? 'white' : 'black')
				}
				this.board.appendChild(cell)
			}
		}
		this.#initializePiece(this.#whitePiece)
		this.#initializePiece(this.#blackPeice)
	}
}


// ---- Chess piece logic  ---- //
class ChessPiece {
	#location;
	#color;
	#id;
	constructor(sprite, id, location, color) {
		this.sprite = sprite
		this.#id = id
		this.#location = location
		this.#color = color
	}
	init() {
		const div = document.createElement("div");
		const img = document.createElement("img")

		img.src = this.sprite
		div.id = this.#id
		div.dataset.color = this.#color
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
	}

	get coordinate() {
		return this.#location
	}

	set coordinate(newLocation) {
		this.#location = newLocation
	}
}

const whitePieces = [
	{ color: 'white', type: 'pawn', id: 'whitePawn1', location: 'G1' },
	{ color: 'white', type: 'pawn', id: 'whitePawn2', location: 'G2' },
	{ color: 'white', type: 'pawn', id: 'whitePawn3', location: 'G3' },
	{ color: 'white', type: 'pawn', id: 'whitePawn4', location: 'G4' },
	{ color: 'white', type: 'pawn', id: 'whitePawn5', location: 'G5' },
	{ color: 'white', type: 'pawn', id: 'whitePawn6', location: 'G6' },
	{ color: 'white', type: 'pawn', id: 'whitePawn7', location: 'G7' },
	{ color: 'white', type: 'pawn', id: 'whitePawn8', location: 'G8' },
	{ color: 'white', type: 'rook', id: 'whiteRook1', location: 'H1' },
	{ color: 'white', type: 'rook', id: 'whiteRook2', location: 'H8' },
	{ color: 'white', type: 'knight', id: 'whiteKnight1', location: 'H2' },
	{ color: 'white', type: 'knight', id: 'whiteKnight2', location: 'H7' },
	{ color: 'white', type: 'bishop', id: 'whiteBishop1', location: 'H6' },
	{ color: 'white', type: 'bishop', id: 'whiteBishop1', location: 'H3' },
	{ color: 'white', type: 'king', id: 'whiteKing', location: 'H5' },
	{ color: 'white', type: 'queen', id: 'whiteQueen', location: 'H4' },
];

const blackPieces = [
	{ color: 'black', type: 'pawn', id: 'blackPawn1', location: 'B1' },
	{ color: 'black', type: 'pawn', id: 'blackPawn2', location: 'B2' },
	{ color: 'black', type: 'pawn', id: 'blackPawn3', location: 'B3' },
	{ color: 'black', type: 'pawn', id: 'blackPawn4', location: 'B4' },
	{ color: 'black', type: 'pawn', id: 'blackPawn5', location: 'B5' },
	{ color: 'black', type: 'pawn', id: 'blackPawn6', location: 'B6' },
	{ color: 'black', type: 'pawn', id: 'blackPawn7', location: 'B7' },
	{ color: 'black', type: 'pawn', id: 'blackPawn8', location: 'B8' },
	{ color: 'black', type: 'rook', id: 'blackRook1', location: 'A1' },
	{ color: 'black', type: 'rook', id: 'blackRook2', location: 'A8' },
	{ color: 'black', type: 'knight', id: 'blackKnight1', location: 'A2' },
	{ color: 'black', type: 'knight', id: 'blackKnight2', location: 'A7' },
	{ color: 'black', type: 'bishop', id: 'blackBishop1', location: 'A6' },
	{ color: 'black', type: 'bishop', id: 'blackBishop1', location: 'A3' },
	{ color: 'black', type: 'king', id: 'blackKing', location: 'A5' },
	{ color: 'black', type: 'queen', id: 'blackQueen', location: 'A4' },
];

const boardDiv = document.getElementById('board')
const board = new Board(whitePieces, blackPieces, boardDiv)
board.init()




