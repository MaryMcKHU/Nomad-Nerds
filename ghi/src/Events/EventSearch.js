import { ReactSearchAutocomplete } from "react-search-autocomplete";
import cities from "../worldcities.json";
import { useNavigate } from "react-router-dom";

function EventSearch() {
  const navigate = useNavigate();

  const handleOnSelect = function (item) {
    console.log("event", { state: { city: item } })
    navigate("event", { state: { city: item } });
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
        styling={{ border: "3px solid rgba(255, 171, 56)", fontSize: "1.2rem" }}
      />
    </div>
  );
}

export default EventSearch;