import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import reqresAPI from '$root/page/reqres.api';
import * as data from '$root/data/user.data';
// import { getParams } from '$helper/lib-api';
// import * as schema from '$root/schema/list-user.schema';

chai.use(jsonSchema)

describe('Partial Update Booking', function (){
    it.only('Should successful updates a current booking', async () => {
        
        const response = await reqresAPI.partialUpdate(data);

        assert.equal(response.status, 200);
        // assert.containsAllKeys(response.data, ["firstname", "lastname", "totalprice", "depositepaid", "bookingdates", "checkin", "checkout", "additionalneeds"]);
        // assert.isString(response,data,firstname);
        // assert.isString(response.data.lastname);
        // assert.isNumber(response.data.totalprice);
        // assert.isBoolean(response.data.depositpaid);
        // assert.isObject(response.data.bookingdates);
        // assert.isDate(response.data.checkin);
        // assert.isDate(response.data.checkout);
        // assert.isString(response.data.additionalneeds);
    })
})