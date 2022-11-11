import chai, { assert, expect } from "chai";
import jsonSchema from "chai-json-schema";
import reqresApi from "$root/page/reqres.api";
import * as data from "$root/data/user.data";
import { getParams } from "$root/helper/lib-api";
import * as schema from "$root/schema/update-booking.schema"

chai.use(jsonSchema);

describe('Update Booking', function () {
    it('should successfully update user booking data', async () => {
        const userId = getParams(data.USER_DETAIL['id'])
        const response = await reqresApi.update_booking(userId, data.UPDATE_BOOKING);
        
        assert.equal(response.status, 200);
    });
});