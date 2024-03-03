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