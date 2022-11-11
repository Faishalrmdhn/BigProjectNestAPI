import chai, {assert, expect} from 'chai'
import reqresApi from '$root/page/reqres.api'
import * as data from '$root/data/user.data'


describe('Health Check', function() {
    it('Should check ping health', async() => {
        const response = await reqresApi.health_check(data.HEALTH_CHECK)

        assert.equal(response.status, 201)
    });
});
