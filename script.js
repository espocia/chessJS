class Board {
	#whitePiece
	#blackPeice
	#initializePiece(piece, asset) {
		const children = this.board.children;
		for (let i = 0; i < piece.length; i++) {
			for (let j = 0; j < children.length; j++) {
				const targetPiece = piece[i];
				if (piece[i].initialLocation === children.item(j).id) {
					const pawn = new ChessPiece(asset, targetPiece.id, targetPiece.initialLocation);
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
						const draggedElement = document.getElementById(data);
						const cell = event.target
						cell.appendChild(draggedElement);
						console.log(event.target, draggedElement)


						const targetPieceColorMove = () => {
							if (data.startsWith('black')) {
								return this.#blackPeice
							} else if (data.startsWith('white')) {
								return this.#whitePiece
							}
						}

						targetPieceColorMove().map((piece) => {
							if (piece.id === data) {
								piece.initialLocation = event.target.id

							}
						})
						const target = targetPieceColorMove().find((piece) => piece.id === data)
						//console.log(target)
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
		this.#initializePiece(this.#whitePiece, './assets/chess-pawn-white.png')
		this.#initializePiece(this.#blackPeice, './assets/chess-pawn-black.png')
	}
}


// ---- Chess piece logic  ---- //
class ChessPiece {
	#location;
	constructor(sprite, id, location) {
		this.sprite = sprite
		this.id = id
		this.#location = location
	}
	init() {
		const img = document.createElement("img");
		img.id = this.id
		img.draggable = true;
		img.ondragstart = (event) => {
			event.dataTransfer.setData("id", event.target.id);
		};
		img.src = this.sprite
		img.classList.add('piece')
		return img
	}

	get coordinate() {
		return this.#location
	}

	set coordinate(newLocation) {
		this.#location = newLocation
	}



}

const whitePieces = [
	{ id: 'whitePawn1', initialLocation: 'G1' },
	{ id: 'whitePawn2', initialLocation: 'G2' },
	{ id: 'whitePawn3', initialLocation: 'G3' },
	{ id: 'whitePawn4', initialLocation: 'G4' },
	{ id: 'whitePawn5', initialLocation: 'G5' },
	{ id: 'whitePawn6', initialLocation: 'G6' },
	{ id: 'whitePawn7', initialLocation: 'G7' },
	{ id: 'whitePawn8', initialLocation: 'G8' },
]

const blackPieces = [
	{ id: 'blackPawn1', initialLocation: 'B1' },
	{ id: 'blackPawn2', initialLocation: 'B2' },
	{ id: 'blackPawn3', initialLocation: 'B3' },
	{ id: 'blackPawn4', initialLocation: 'B4' },
	{ id: 'blackPawn5', initialLocation: 'B5' },
	{ id: 'blackPawn6', initialLocation: 'B6' },
	{ id: 'blackPawn7', initialLocation: 'B7' },
	{ id: 'blackPawn8', initialLocation: 'B8' },
]

const boardDiv = document.getElementById('board')
const board = new Board(whitePieces, blackPieces, boardDiv)
board.init()

const children = document.getElementById('board').children




