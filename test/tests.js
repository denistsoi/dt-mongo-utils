const mongoutils  = require('../lib/utils/dt-mongo-utils');
const expect = require('chai').expect;
const mongoose = require('mongoose');

const Tester = require('./testModel');

describe('dt-mongo-utils', () =>{
  it('should connect to local db instance', () => {
    (async () => {
      await mongoutils.connect();
      // readyState 1 == connected
      expect(mongoose.connection.readyState).to.eq(1);
    })()
  })

  it('should save data to local db instance', (done) => {
    (async () => {
      await mongoutils.connect();

      await Tester.remove({}, err => { 
        if (err) {
          console.log(err) 
        }
      });

      let testdoc = { name: 'harry' };

      let newTester = new Tester(testdoc);

      newTester.save(err => {
        if (err) throw new Error(err)
        expect(err).to.be.null;
        done()
      })

    })();
  });

  it('should count the number of records in local db', (done) => {
    (async () => {
      await mongoutils.connect();

      let testdoc = { name: 'harry' };
      
      let newTester = new Tester(testdoc);

      Tester.find(testdoc, (err, docs) => {
        if (err) throw new Error(err)
        expect(err).to.be.null;
        expect(docs).to.have.length
        done()
      })
    })();
    
  })

  after(() => {
    Tester.remove({}, err => {
      if (err) {
        console.log(err)
        expect(err).to.be.null;
      }
    })
  })
})