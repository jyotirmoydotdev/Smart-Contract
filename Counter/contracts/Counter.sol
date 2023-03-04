// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Counter{
    string public name;
    uint public count;

    constructor (string memory _name,uint _count){
        name=_name;
        count=_count;
    }
    function increment()public returns(uint){
        count++;
        return count;
    }
    function decrement()public returns(uint){
        count--;
        return count;
    }
    function getCount()public view returns(uint){
        return count;
    }
    function getName()public view returns(string memory){
        return name;
    }
    function setName(string memory _name)public {
        name=_name;
    }
}