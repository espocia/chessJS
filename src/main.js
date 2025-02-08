import { Board } from "./lib/Board.js";

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
	{ color: 'white', type: 'bishop', id: 'whiteBishop2', location: 'H3' },
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
	{ color: 'black', type: 'bishop', id: 'blackBishop2', location: 'A3' },
	{ color: 'black', type: 'king', id: 'blackKing', location: 'A5' },
	{ color: 'black', type: 'queen', id: 'blackQueen', location: 'A4' },
];

const boardDiv = document.getElementById('board')
const board = new Board(whitePieces, blackPieces, boardDiv)
board.init()




