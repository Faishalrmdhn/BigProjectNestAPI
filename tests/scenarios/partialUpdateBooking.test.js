import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
import reqresAPI from '$root/page/reqres.api';
import * as data from '$root/data/user.data';
import { getParams } from '$helper/lib-api';
// import * as schema from '$root/schema/list-user.schema';

chai.use(jsonSchema)

describe('Partial Update Booking', function (){
    it('Should successful updates a current booking', async () => {
        const userId = getParams(data.USER_DETAIL['id'])
        const response = await reqresAPI.partialUpdateBooking(userId, data.PARTIAL_UPDATE_DATA);

        console.log(response.data);
        assert.equal(response.status, 200);
    })
})