import { useEffect, useState } from 'react';
import { fetchTestMessage } from '../services/apiService';

const Home = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const getMessage = async () => {
      const message = await fetchTestMessage();
      setMessage(message);
    };

    getMessage();
  }, []);

  return (
    <div>
      <h1>Message from Backend:</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;