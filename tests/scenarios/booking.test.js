import chai, {assert, expect} from 'chai'
import jsonSchema from 'chai-json-schema'
import reqresApi from '$root/page/reqres.api'
import * as data from '$root/data/user.data'
import {getParams} from '$root/helper/lib-api'
// import * as schema from '$root/schema/list-user.schema';

chai.use(jsonSchema)

describe('Get Booking Id', function () {
    it('it should give user Id of all the bookings that exist within the API.', async () => {
        const response = await reqresApi.getBookingId()
        assert.equal(response.status, 200)
        assert.containsAllKeys(response.data[0], ['bookingid'])
        assert.isNumber(response.data[0].bookingid)
    });
});

// describe('Get Booking Id Filtered by Name', function () {
//     it.only('it should give user Id specified by name that exist within the API.', async () => {
//         const firstName = getParams(data.USER_DETAIL['firstname'])
//         const lastName = getParams(data.USER_DETAIL['lastname'])
//         const response = await reqresApi.getBookingId(firstName)
//         assert.equal(response.status, 200)
//         // assert.containsAllKeys(response.data[0], ['bookingid'])
//     });
// });

describe('Get Booking', function () {
    it('it should returns a specific booking based upon the booking id provided', async () => {
        const param = getParams(data.USER_DETAIL['id'])
        const response = await reqresApi.getBooking(param)
        console.log(response.data)

        assert.equal(response.status, 200)
        assert.containsAllKeys(response.data, ['firstname', 'lastname', 'totalprice', 'depositpaid', 'bookingdates', 'additionalneeds' ])
        assert.isString(response.data.firstname)
        assert.isString(response.data.lastname)
        assert.isNumber(response.data.totalprice)
        assert.isBoolean(response.data.depositpaid)
        assert.isObject(response.data.bookingdates)
        assert.isString(response.data.additionalneeds)
    });
});

describe('Create Booking', function () {
    it('it should Creates a new booking in the API', async () => {
        const response = await reqresApi.createBooking(data.NEW_USER_DATA)

        assert.equal(response.status, 200)
        assert.containsAllKeys(response.data, ['bookingid', 'booking'])
        assert.containsAllKeys(response.data.booking, ['firstname', 'lastname', 'totalprice', 'depositpaid', 'bookingdates','additionalneeds'])
        assert.containsAllKeys(response.data.booking.bookingdates, ['checkin', 'checkout'])

        assert.isNumber(response.data.bookingid)
        assert.isObject(response.data.booking)
        assert.isString(response.data.booking.firstname)
        assert.isString(response.data.booking.lastname)
        assert.isNumber(response.data.booking.totalprice)
        assert.isBoolean(response.data.booking.depositpaid)
        assert.isObject(response.data.booking.bookingdates)
        assert.isString(response.data.booking.bookingdates.checkin)
        assert.isString(response.data.booking.bookingdates.checkout)
        assert.isString(response.data.booking.additionalneeds)
    });
});

describe('Partial Update Booking', function () {
    it('Should successful updates a current booking', async () => {
        const userId = getParams(data.USER_DETAIL['id'])
        const response = await reqresApi.partialUpdateBooking(userId, data.PARTIAL_UPDATE_DATA);

        assert.equal(response.status, 200);
    })
});

describe('Delete Booking', function () {
    it('Should returns the ids of all the bookings that exist witihin the API', async () => {
        const userId = getParams(data.USER_DETAIL['id'])
        const response = await reqresApi.deleteBooking(userId);

        assert.equal(response.status, 201);
    })
});