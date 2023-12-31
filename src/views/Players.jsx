import { useContext } from "react";
import Items from "../components/items/Items";
import Layout from "../components/layout/Layout";
import { getPlayersByCountry } from "../services/apiPlayers";
import { FootballContext } from "../context/FootballContext";

function Players(){
    const {selectedCountryId, setSelectedPlayerId , setIsPlayerSelected, setPlayerName} = useContext(FootballContext);

    return (
        <Layout>
            <Items
                 itemType="players" 
                 getData={() => getPlayersByCountry(selectedCountryId)} 
                 setSelectedItemId={setSelectedPlayerId} 
                 setItemName={setPlayerName} 
                 setIsItemSelected={setIsPlayerSelected} 
                 uniqueKey={selectedCountryId}
                 columnsHeaders={["display_name", "birthdate", "birthcountry", "birthplace"]}
            />
        </Layout>
    );
} 

export default Players;