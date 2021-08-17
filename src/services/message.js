export default function sendMessage(data) {
  const result = fetch(
    'https://contact-form-api-jamstack.herokuapp.com/message',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Não foi possível enviar sua mensgem!');
    })
    .then((response) => response)
    .catch((error) => error);

  return result;
}
