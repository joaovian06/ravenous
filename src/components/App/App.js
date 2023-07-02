import styles from './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business]

function App() {
  return (
    <div className={styles.App}>
      <SearchBar></SearchBar>
      <BusinessList businesses={businesses}></BusinessList>
    </div>
  );
}

export default App;
