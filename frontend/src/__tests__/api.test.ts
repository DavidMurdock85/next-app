import { fetchTestMessage } from '../services/apiService';

test('fetchTestMessage should return a message', async () => {
  const message = await fetchTestMessage();
  expect(message).toBe('Hello from the backend!');
});