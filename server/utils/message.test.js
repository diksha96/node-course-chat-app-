var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=>
{
     it('it should genertae correct message object', ()=>
     {
          var from = 'jen';
          var text = 'greeting message';
          var message = generateMessage(from,text);

          expect(message.createdAt).toBeA('number');
          expect(message).toInclude({from,text});
     });
});