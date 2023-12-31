import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from "./views/LoginPage";
import PageNotFound from './views/PageNotFound';
import { useState } from 'react';
import { FootballContext } from './context/FootballContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Countries from './views/Countries';
import Players from './views/Players';
import PlayerDetails from './views/PlayerDetails';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  }
})

function App() {
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [countryName, setCountryName] = useState("");
  const [isCountrySelected, setIsCountrySelected] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [isPlayerSelected, setIsPlayerSelected] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <FootballContext.Provider value={{ selectedCountryId, setSelectedCountryId,
          isCountrySelected, setIsCountrySelected, countryName, setCountryName,
          selectedPlayerId, setSelectedPlayerId , isPlayerSelected, setIsPlayerSelected, 
          playerName, setPlayerName, isAuthenticated, setIsAuthenticated
          }}>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<LoginPage />}></Route> 
                <Route path="/login" element={<LoginPage />}></Route> 
                <Route path="/countries" element={<Countries/>}></Route> 
                <Route path="/countries/:id" element={<Players/>}></Route> 
                <Route path="/players/:id" element={<PlayerDetails/>}></Route> 
                <Route path="*" element={<PageNotFound/>}></Route> 
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
    </FootballContext.Provider>
  );
}

export default App;
