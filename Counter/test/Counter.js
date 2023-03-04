const {expect} = require('chai');
const {ethers} = require('hardhat');

describe('Counter Contrat',()=>{
    let Counter
    let counter
    beforeEach(async ()=>{
        Counter=await ethers.getContractFactory('Counter')
        counter=await Counter.deploy('jyotirmoy',1)
    })

    describe('Deployment',()=>{
        it('Check Count equal to 1',async ()=>{
            const count=await counter.count()
            expect(count).to.equal(1)
        })
        it('Check Name equal to jyotirmoy',async ()=>{
            const name=await counter.name()
            expect(name).to.equal('jyotirmoy')
        })
    })

    describe('Counting',()=>{
        let tranaction;
        it('Read count from "count" variable',async ()=>{
            expect(await counter.count()).is.equal(1)
        })
        it('Read count from "getCount()" Function',async ()=>{
            expect(await counter.getCount()).is.equal(1)
        })
        it('Checks Incement',async ()=>{
            tranaction=await counter.increment()
            await tranaction.wait()
            expect(await counter.count()).to.equal(2)
            tranaction=await counter.increment()
            await tranaction.wait()
            expect(await counter.count()).to.equal(3)
        })

        it('check Decrement',async()=>{
            tranaction=await counter.decrement()
            await tranaction.wait()
            expect(await counter.count()).to.equal(0)

            await expect(counter.decrement()).to.be.reverted
        })
    })

    describe('Set Name',()=>{
        it('Read count from "name" variable',async ()=>{
            expect(await counter.name()).is.equal('jyotirmoy')
        })
        it('Read count from "getName()" Function',async ()=>{
            expect(await counter.getName()).is.equal('jyotirmoy')
        })
        let tranaction;
        it('Update name to joy',async ()=>{
            tranaction= await counter.setName("joy")
            await tranaction.wait()
            expect(await counter.name()).to.equal('joy')
        })
        it('Update name to ra-one',async ()=>{
            tranaction=await counter.setName("ra-one")
            await tranaction.wait()
            expect(await counter.name()).to.equal('ra-one')
        })
        it('Update name to villan',async ()=>{
            tranaction=await counter.setName("villan")
            await tranaction.wait()
            expect(await counter.name()).to.equal('villan')
        })
    })
})