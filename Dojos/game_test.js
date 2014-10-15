var Game = ('./game.js');

var assert = require('chai').assert;

it('should play the game', function(){
  var game = new Game;

  assert.deepEqual(game.board, [
    [false, false, false],
    [false, false, false],
    [false, false, false],
    ]);

    // /*Uncomment me to kill test...
    game.setAlive(0,1);
    game.setAlive(1,1);
    game.setAlive(2,1);

    assert.isTrue(game.isAlive(0,1));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,1));

    assert.equal(game.display(),
        "+---+---+---+\n" +
        "|   | X |   |\n" +
        "+---+---+---+\n" +
        "|   | X |   |\n" +
        "+---+---+---+\n" +
        "|   | X |   |\n" +
        "+---+---+---+\n"
        );

    game.tick();

    assert.isTrue(game.isAlive(1,0));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(1,2));

    assert.equal(game.display(),
        "+---+---+---+\n" +
        "|   | X |   |\n" +
        "+---+---+---+\n" +
        "|   | X |   |\n" +
        "+---+---+---+\n" +
        "|   | X |   |\n" +
        "+---+---+---+\n"
      );

    game.tick();

    assert.isFalse(game.isAlive(0,1));
    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,1));
    assert.isTrue(game.isAlive(1,2));

    assert.equal(game.display()
        "+---+---+---+\n" +
        "|   | X |   |\n" +
        "+---+---+---+\n" +
        "|   | X |   |\n" +
        "+---+---+---+\n" +
        "|   | X |   |\n" +
        "+---+---+---+\n"
      );
    game.tick();

    assert.isTrue(game.isAlive(1,1));
    assert.isTrue(game.isAlive(2,1));
    assert.isTrue(game.isAlive(1,2));
    assert.isTrue(game.isAlive(2,2));

    assert.equal(game.display()
  );  
});
