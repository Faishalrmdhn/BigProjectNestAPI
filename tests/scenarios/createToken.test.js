import chai, {assert, expect} from 'chai'
import jsonSchema from 'chai-json-schema'
import reqresApi from '$root/page/reqres.api'
import * as data from '$root/data/user.data'
// import {getParams} from '$root/helper/lib-api'
// import * as schema from '$root/schema/list-user.schema';

chai.use(jsonSchema)

describe('Create Token', function () {
    it('it should give user Token when asserted with username and password correctly', async () => {
        const response = await reqresApi.auth(data.AUTH_USER)

        assert.equal(response.status, 200)
    });
});