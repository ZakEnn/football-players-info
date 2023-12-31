import { useContext } from "react";
import ItemDetails from "../components/items/ItemDetails";
import Layout from "../components/layout/Layout";
import { FootballContext } from "../context/FootballContext";
import { getPlayersById } from "../services/apiPlayers";

function PlayerDetails(){
    const {selectedPlayerId} = useContext(FootballContext);

    return (
        <Layout>
            <ItemDetails
                 itemType="player" 
                 selectedItemId={selectedPlayerId}     
                 getData={() => getPlayersById(selectedPlayerId)}  
                 columnsHeaders={
                    ["image_path", "firstname", "lastname", 
                    "birthcountry","birthdate","birthplace",
                    "height","weight","nationality"]
                }          
            />
        </Layout>
    );
} 

export default PlayerDetails;

