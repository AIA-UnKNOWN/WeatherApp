import './LocationSearch.css';


function LocationSearch(props) {
  return (
    <div id="LocationSearch">
      <input
        type="text"
        name="locationSearch"
        id="locationSearch"
        placeHolder="Ex. Manila"
      />
      <button onClick={props.search}>
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
}

export default LocationSearch;