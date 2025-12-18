import { fetchPost } from "../api.js";

describe('tests for fetchPost from api.js', () => {
    test('test for correct behaviour if id = 1', async () => {
        const result = await fetchPost(1);
        expect(result).toEqual({ id: 1, title: 'First Post' });
    })
})
