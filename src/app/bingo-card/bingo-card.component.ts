import { Component, OnInit } from '@angular/core';
import { Squares } from '../shared/squares';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.css']
})
export class BingoCardComponent implements OnInit {
  bingoSquares;
  isClicked=  false;

  constructor() { }

  ngOnInit(): void {
    this.bingoSquares = Squares;
  }

  onClick(){
    this.isClicked = true;
  }

}
