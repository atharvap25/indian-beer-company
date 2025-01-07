import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen';
import HomeScreen from './components/HomeScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <HomeScreen />
      )}
    </div>
  )
}
