import { useContext } from "react";
import Items from "../components/items/Items";
import Layout from "../components/layout/Layout";
import { getCountries } from "../services/apiPlayers";
import { FootballContext } from "../context/FootballContext";

function Countries(){
    const {setSelectedCountryId , setIsCountrySelected, setCountryName} = useContext(FootballContext);

    return (
        <Layout>
            <Items
                 itemType="countries" 
                 getData={getCountries} 
                 setSelectedItemId={setSelectedCountryId} 
                 setItemName={setCountryName} 
                 setIsItemSelected={setIsCountrySelected} 
                 uniqueKey="_"
                 columnsHeaders={["name", "extra.continent", "extra.world_region", "extra.fifa"]}
            />
        </Layout>
    );
} 

export default Countries;