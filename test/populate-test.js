import { expect } from 'chai';
import tripsData from '../src/mock-data/trips-data.js' 
import destData from '../src/mock-data/destinations-data.js' 
import { sortDataById } from '../src/functions-4-tests/login.js' 
import {
    getDestinationsByIds,
    getTripsThisYear,
    getFinalCost
} from '../src/functions-4-tests/populate.js'

describe('getDestinationsByIds()', () => {
        
    it('should return an array of the correct destinations given a valid ID', () => {
        let userTrips30 = sortDataById(tripsData, 30)
        let destination30 = getDestinationsByIds(destData, userTrips30)
        expect(destination30).to.have.lengthOf(3)
        expect(destination30[0].destination).to.equal('Antananarivo, Madagascar')
        expect(destination30[1].destination).to.equal('Cebu City, Philippines')
        expect(destination30[2].destination).to.equal('Antananarivo, Madagascar')
    });
        
    it('should return an array of the correct destinations given a different valid ID', () => {
        let userTrips44 = sortDataById(tripsData, 44)
        let destination44 = getDestinationsByIds(destData, userTrips44)
        expect(destination44).to.have.lengthOf(2)
        expect(destination44[0].destination).to.equal('Johannesburg, South Africa')
        expect(destination44[1].destination).to.equal('Key West, Florida')
    });
        
    it('should return an empty array if given an invalid ID', () => {
        let userTrips999 = sortDataById(tripsData, 999)
        let destination999 = getDestinationsByIds(destData, userTrips999)
        expect(destination999).to.have.lengthOf(0)
    });

});

describe('getTripsThisYear()', () => {
    
    it('should return an array of the most recent year of trips give a valid ID', () => {
        let userTrips12 = sortDataById(tripsData, 12)
        let tripsThisYear12 = getTripsThisYear(userTrips12)
        expect(tripsThisYear12).to.have.lengthOf(6)
        expect(tripsThisYear12[1].date.slice(0, 4)).to.equal(tripsThisYear12[0].date.slice(0, 4))
        expect(tripsThisYear12[3].date.slice(0, 4)).to.equal(tripsThisYear12[0].date.slice(0, 4))
        expect(tripsThisYear12[5].date.slice(0, 4)).to.equal(tripsThisYear12[0].date.slice(0, 4))
    });
    
    it('should return an array of the most recent year of trips give a different valid ID', () => {
        let userTrips39 = sortDataById(tripsData, 39)
        let tripsThisYear39 = getTripsThisYear(userTrips39)
        expect(tripsThisYear39).to.have.lengthOf(4)
        expect(tripsThisYear39[1].date.slice(0, 4)).to.equal(tripsThisYear39[0].date.slice(0, 4))
        expect(tripsThisYear39[2].date.slice(0, 4)).to.equal(tripsThisYear39[0].date.slice(0, 4))
        expect(tripsThisYear39[3].date.slice(0, 4)).to.equal(tripsThisYear39[0].date.slice(0, 4))
    });
    
    it('should return an empty array given an invalid ID', () => {
        let userTrips222 = sortDataById(tripsData, 222)
        let tripsThisYear222 = getTripsThisYear(userTrips222)
        expect(tripsThisYear222).to.have.lengthOf(0)
    });

});

describe('getFinalCost()', () => {
    
    it('should return the total of trips taken', () => {
        let userTrips12 = sortDataById(tripsData, 12)
        let tripsThisYear12 = getTripsThisYear(userTrips12)
        let finalCost12 = getFinalCost(destData, tripsThisYear12)

        expect(finalCost12).to.equal('984.50')
    });
    
    it('should return the total of different trips taken', () => {
        let userTrips31 = sortDataById(tripsData, 31)
        let tripsThisYear31 = getTripsThisYear(userTrips31)
        let finalCost31 = getFinalCost(destData, tripsThisYear31)

        expect(finalCost31).to.equal('2028.40')
    });
    
    it('should return 0 if an empty array is passed', () => {
        let userTrips499 = sortDataById(tripsData, 499)
        let tripsThisYear499 = getTripsThisYear(userTrips499)
        let finalCost499 = getFinalCost(destData, tripsThisYear499)

        expect(finalCost499).to.equal('0.00')
    });

});