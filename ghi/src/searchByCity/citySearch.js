import { ReactSearchAutocomplete } from "react-search-autocomplete";
import cities from "../worldcities.json";
import { useNavigate } from "react-router-dom";

function CitySearch() {
  const navigate = useNavigate();

  const handleOnSelect = function (item) {
    navigate("city", { state: { city: item } });
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left", cursor:'pointer' }}>
          {item.city}, {item.admin_name}, {item.country}
        </span>
      </>
    );
  };

  return (
    <div className="city-searchbar">
      <ReactSearchAutocomplete
        items={cities}
        fuseOptions={{ keys: ["city", "country", "admin_name"] }}
        resultStringKeyName="city"
        onSelect={handleOnSelect}
        autoFocus
        placeholder="Where to?"
        formatResult={formatResult}
        maxResults={5}
        styling={{ border: "3px solid rgba(173, 182, 72)", fontSize: "1.2rem" }}
      />
    </div>
  );
}

export default CitySearch;
