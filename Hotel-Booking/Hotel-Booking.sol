// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract HotelBooking{
    address payable public owner;
    constructor (){
        owner=payable(msg.sender);
        currentstatus=Status.vacant;
    }

    enum Status {vacant,occupied}
    Status currentstatus;

    function RoomStatus()public view returns(string memory){
        if (currentstatus==Status.vacant){
            string memory message="The room is vacant";
            return message;
        }
        else{
            string memory message="The room is occupied";
            return message;
        }
    }
    event occupy(address _rep,uint amount);

    struct BookingDetails{
            address occupier;
            uint value;
    }
    BookingDetails Occupier;

    function GuestDetails()public view returns(BookingDetails memory){
        return Occupier;
    }
    function BookRoom()payable public{
        require(msg.value >=2 ether,"Not sufficent fund");
        require(currentstatus==Status.vacant,"The room is occupied");

        (bool sent, bytes memory data)=owner.call{value:msg.value}("");
        require(true);

        currentstatus=Status.occupied;
        emit occupy(msg.sender,msg.value);

        Occupier=BookingDetails(msg.sender,msg.value);
    }

    function CheckOut()public{
        require(currentstatus==Status.occupied,"Your are checout of the room");
        require(msg.sender==Occupier.occupier,"Your are not the occupier");
        currentstatus=Status.vacant;
    }
}
