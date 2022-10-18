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
        <span style={{ display: "block", textAlign: "left" }}>
          {item.city}, {item.admin_name}, {item.country}
        </span>
      </>
    );
  };

  return (
    <div className="Test">
      <header className="Test-header">
        <div style={{ width: 400, paddingTop: -100, marginTop:'50px', marginBottom:'200px' }}>
          <ReactSearchAutocomplete
            items={cities}
            fuseOptions={{ keys: ["city", "country", "admin_name"] }}
            resultStringKeyName="city"
            onSelect={handleOnSelect}
            autoFocus
            placeholder="Search a city to find things to do"
            formatResult={formatResult}
            maxResults={5}
            styling={{ borderRadius: "10px" }}
          />
        </div>
      </header>
    </div>
  );
}

export default CitySearch;
