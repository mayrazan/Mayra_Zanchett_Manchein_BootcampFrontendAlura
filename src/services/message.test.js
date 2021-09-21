import sendMessage from './message';

function mockFetch(data) {
  if (data) {
    return jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ ok: true, json: () => data }));
  }

  return jest
    .fn()
    .mockRejectedValue(new Error('Não foi possível enviar sua mensagem!'));
}

describe('sendMessage()', () => {
  describe('and passing body to function', () => {
    test('and returns the data', async () => {
      const userDTO = {
        name: 'Mayra',
        email: 'email@email.com',
        message: 'nova mensagem',
      };

      global.fetch = mockFetch(userDTO);

      const response = await sendMessage(userDTO);
      expect(response).toEqual(userDTO);
    });
  });

  describe('and its rejected', () => {
    test('returns an error', async () => {

      await expect(mockFetch()).rejects.toThrow(
        'Não foi possível enviar sua mensagem!',
      );
    });
  });
});
