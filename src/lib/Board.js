import { ChessPiece, Pawn, Bishop, Queen, King, Rook, Knight } from "./ChessPiece.js";
export class Board {
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

					function createFromClass(type) {
						console.log(type)
						switch (type) {
							case 'pawn':
								return new Pawn(asset(targetPiece.color, targetPiece.type), targetPiece.id, targetPiece.location, targetPiece.color);
							case 'bishop':
								return new Bishop(asset(targetPiece.color, targetPiece.type), targetPiece.id, targetPiece.location, targetPiece.color);
							case 'queen':
								return new Queen(asset(targetPiece.color, targetPiece.type), targetPiece.id, targetPiece.location, targetPiece.color);
							case 'king':
								return new King(asset(targetPiece.color, targetPiece.type), targetPiece.id, targetPiece.location, targetPiece.color);
							case 'rook':
								return new Rook(asset(targetPiece.color, targetPiece.type), targetPiece.id, targetPiece.location, targetPiece.color);
							case 'knight':
								return new Knight(asset(targetPiece.color, targetPiece.type), targetPiece.id, targetPiece.location, targetPiece.color);
							default:
								return new ChessPiece(asset(targetPiece.color, targetPiece.type), targetPiece.id, targetPiece.location, targetPiece.color);

						}
					}
					const chessPiece = createFromClass(targetPiece.type)
					children.item(j).appendChild(chessPiece.init());
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

						if (event.target.tagName === 'IMG') {
							// if event target is img -> capture
							// if event target is div -> move
							console.log(draggedElement, event.target)

							// Early return of tying to raplce the piece color
							if (event.target.parentNode.getAttribute('data-color') === color) {
								return
							}
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
		this.#initializePiece(this.#whitePiece)
		this.#initializePiece(this.#blackPeice)
	}
}
