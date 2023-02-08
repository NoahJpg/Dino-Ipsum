import { experiments } from 'webpack'
import Game from '../src/game.js'
import Dinos from '../src/dino-ipsum.js'

describe("game", () => {

  test('should correctly create a Game object with alphabet', () => {
    let alphabet = Game.alphabet
    expect(Game.alphabet).toEqual['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  })
  test('should correctly store random dino name in this.dino', () => {
    expect(Game.getDinoName).toEqual('Random Dino name');
  })
  
})