var fixtures = require('./fixtures')('bemhtml');
var test = fixtures.test;

describe('BEMContext this.isLast()', function() {
  it('should support this.isLast()', function() {
    test(function() {
      block('b1')(
        match(function() { return this.isLast(); })
          .addMix()({ mods: { position: 'last' } })
      );
    }, [
      {
        tag: 'table',
        content: {
          block: 'b1',
          tag: 'tr',
          content: [
            { content: '', tag: 'td' },
            { content: '', tag: 'td' }
          ]
        }
      },
      {
        block: 'b1',
        content: 'first'
      },
      {
        block: 'b1',
        content: 'last'
      }
    ], '<table><tr class="b1"><td></td><td></td></tr></table>' +
      '<div class="b1">first</div>' +
      '<div class="b1 b1_position_last">last</div>');
  });

  it('should preserve position', function() {
    test(function() {
      block('button')
        .match(function() { return this.isLast(); })
        .addMods()({ last: 'yes' });
    },
    [
      { block: 'button' },
      { block: 'button' }
    ],
      '<div class="button"></div>' +
      '<div class="button button_last_yes"></div>');
  });
});
