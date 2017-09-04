const mongoutils  = require('./lib/utils/dt-mongo-utils');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('dt-mongo-utils', () =>{
  it('should connect to local db instance', () => {
    (async () => {
      await mongoutils.connect();
      // readyState 1 == connected
      expect(mongoose.connection.readyState).to.eq(1);
    })()
  })
})