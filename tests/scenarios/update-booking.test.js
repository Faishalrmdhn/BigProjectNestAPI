import chai, { assert, expect } from "chai";
import jsonSchema from "chai-json-schema";
import reqresApi from "$root/page/reqres.api";
import * as data from "$root/data/user.data";
import { getParams } from "$root/helper/lib-api";
import * as schema from "$root/schema/update-booking.schema"

chai.use(jsonSchema);

describe('Update Booking', function () {
    it.only('should successfully update user booking data', async () => {
        const param = getParams(data.UPDATE_BOOKING['id']);
        const response = await reqresApi.update_booking(param);
        
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA)
    });
});