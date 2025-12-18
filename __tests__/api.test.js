import { fetchPost } from "../api.js";

describe('tests for fetchPost from api.js', () => {
    test('test for correct behaviour if id = 1', async () => {
        const resultForFirstTest = await fetchPost(1);
        expect(resultForFirstTest).toEqual({ id: 1, title: 'First Post' });
    })

    test('test for correct behaviour if id != 1', async () => {
        await expect(() => fetchPost(21)).rejects.toThrow('Post not found');
    })

    test('test for correct title if id = 1', async () => {
        const resultForThirdTest = await fetchPost(1);
        expect(resultForThirdTest.title.length).toBe(10);
    })
})
