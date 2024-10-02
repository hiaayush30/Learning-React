import { useLoaderData } from 'react-router-dom';

const User = () => {
  const userData = useLoaderData(); // This will contain the data fetched by the loader
  if (!userData) return <div>Loading...</div>; // Simple loading spinner
  return (
    <div>
      <h1>Welcome, {userData.name}</h1>
    </div>
  );
};