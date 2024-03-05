import { expect } from 'chai';
import tripsData from '../src/mock-data/trips-data.js' 
import destData from '../src/mock-data/destinations-data.js' 
import { 
    parseUserId,
    sortDataById,
    sortTripsByPending,
    sortDestinationsByPending 
} from '../src/functions-4-tests/login.js'

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

describe('sortTripsByPending()', () => {

    it('should return an array of trips based on a user ID', () => {
        let pendingTrips30 = sortTripsByPending(tripsData, 30)

        expect(pendingTrips30).to.be.an('array');
        expect(pendingTrips30[0].status).to.equal("pending");
        expect(pendingTrips30.length).to.equal(2);
        });

    it('should return an array of trips based on a different user ID', () => {
        let pendingTrips12 = sortTripsByPending(tripsData, 12)

        expect(pendingTrips12).to.be.an('array');
        expect(pendingTrips12[0].status).to.equal("pending");
        expect(pendingTrips12.length).to.equal(3);
        });

    it('should return an empty array if the user ID is invalid', () => {
        let pendingTrips714 = sortTripsByPending(tripsData, 714)

        expect(pendingTrips714).to.be.an('array');
        expect(pendingTrips714.length).to.equal(0);
        });

});

describe('sortDestinationsByPending()', () => {

    it('should return an array of matching trips based the pendingTrips array', () => {
        let pendingTrips = [
            {"id":165,"userID":26,"destinationID":1,"status":"pending"},
            {"id":166,"userID":12,"destinationID":28,"status":"pending"},
            {"id":167,"userID":17,"destinationID":43,"status":"pending"}
        ]

        let pendingDestinations = sortDestinationsByPending(pendingTrips, destData)

        expect(pendingDestinations).to.be.an('array');
        expect(pendingDestinations.length).to.equal(3);
        expect(pendingDestinations[0].destination).to.equal("Cusco, Peru");
        expect(pendingDestinations[1].destination).to.equal("São Paulo, Brazil");
        expect(pendingDestinations[2].destination).to.equal("Negril, Jamaica");
        });

    it('should return an empty array if the pendingTrips array is invalid', () => {
        let p0ndingTr0ps = []
        let p0ndingDestinati0ns = sortDestinationsByPending(p0ndingTr0ps, destData)

        expect(p0ndingDestinati0ns).to.be.an('array');
        expect(p0ndingDestinati0ns.length).to.equal(0);
        });
});