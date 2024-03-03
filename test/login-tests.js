import { expect } from 'chai';
import tripsData from '../src/mock-data/trips-data.js' 
import { parseUserId, sortDataById } from '../src/functions-4-tests/login.js'

describe('parseUserId()', () => {
        
    it('should parse a user ID from a username', () => {
        let userId = parseUserId('traveler35')
    
    expect(userId).to.equal(35);
    });
        
    it('should parse a different user ID from a username', () => {
        let userId = parseUserId('traveler66')
    
    expect(userId).to.equal(66);
    });
    
    it('should be falsy if the login format is incorrect', () => {
        let userId = parseUserId('travler66')
    
    expect(userId).to.not.be.ok;
    });

});

describe('sortDataById()', () => {

    it('should return an array of trips based on a user ID', () => {
        let userTrips30 = sortDataById(tripsData, 30)

        expect(userTrips30).to.be.an('array');
        expect(userTrips30.length).to.equal(3);
        });

    it('should return an array of trips based on a different user ID', () => {
        let userTrips2 = sortDataById(tripsData, 2)

        expect(userTrips2).to.be.an('array');
        expect(userTrips2.length).to.equal(5);
        });

    it('should return an empty array if the user does not eist', () => {
        let userTrips999 = sortDataById(tripsData, 999)

        expect(userTrips999).to.be.an('array');
        expect(userTrips999.length).to.to.equal(0);
        });

});