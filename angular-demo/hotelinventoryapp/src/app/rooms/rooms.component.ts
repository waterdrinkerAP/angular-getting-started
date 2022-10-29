import { Component, OnInit } from '@angular/core';
import { IRoom, IRoomList } from './rooms.interface';

@Component({
    selector: 'hinv-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

    public hotelName: string = 'Hilton Hotel';
    public numberOfRooms: number = 10;
    public hideRooms: boolean = false;

    public rooms?: IRoom = {
        totalRooms: 20,
        availableRooms: 10,
        bookedRooms: 5,
    };

    public roomList: IRoomList[] = [
        {
            roomNumber: 1,
            roomType: 'Deluxe Room',
            amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
            price: 500,
            photos: 'http://images.unsplash.com/',
            checkinTime: new Date('11-Nov-2021'),
            checkoutTime: new Date('12-Nov-2021'),
            rating: 4.5,
        },
        {
            roomNumber: 2,
            roomType: 'Deluxe Room',
            amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
            price: 1000,
            photos: 'http://images.unsplash.com/',
            checkinTime: new Date('11-Nov-2021'),
            checkoutTime: new Date('12-Nov-2021'),
            rating: 3.4,
        },
        {
            roomNumber: 3,
            roomType: 'Private Suite',
            amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
            price: 15000,
            photos: 'http://images.unsplash.com/',
            checkinTime: new Date('11-Nov-2021'),
            checkoutTime: new Date('12-Nov-2021'),
            rating: 2.6,
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    public toggle(): void {
        this.hideRooms = !this.hideRooms;
    }

}
