const {expect} = require('chai');
const {ethers} = require('hardhat');

describe('Hotel Booking Smart Contract testing',()=>{
    let Hotel_Booking;
    let hbDeployed;
    beforeEach(async ()=>{
        Hotel_Booking=ethers.getContractFactory('getContractFactory')
        hbDeployed=Hotel_Booking.deploy()
    })

    describe('')
})