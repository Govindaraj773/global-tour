import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

const CountryList = () => {
  const {cities, isLoading} = useCities()  // context api - removing props and importing from context component

    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message="Add the city name by using map" />

    // Create a unique list of countries

    const countries = cities.reduce((arr, city) => {
        // Check if the country is already in the array
        if(!arr.map((el) => el.country).includes(city.country))
        return [...arr, {country: city.country, emoji:city.emoji}];
        else return arr;
    }, []);

  return (
    <ul className={styles.countryList}>
        {countries.map(country => <CountryItem country={country} key={country.country} />)}
    </ul>
  )
}

export default CountryList;