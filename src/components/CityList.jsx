import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";

const CityList = () => {
  const {cities, isLoading} = useCities()  //// context api - removing props and importing from context component

    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message="Add the city name by using map" />

  return (
    <>
    <ul className={styles.cityList}>
        {cities.map(city => <CityItem city={city} key={city.id} />)}
    </ul>
    </>
  )
}

export default CityList;