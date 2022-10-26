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
    <div style={{ width: 475, display:'block', marginLeft:'auto', marginRight:'auto', marginTop:120, marginBottom:200 }}>
      <ReactSearchAutocomplete
        items={cities}
        fuseOptions={{ keys: ["city", "country", "admin_name"] }}
        resultStringKeyName="city"
        onSelect={handleOnSelect}
        autoFocus
        placeholder="Where to?"
        formatResult={formatResult}
        maxResults={5}
        styling={{border:'3px solid rgba(255, 171, 56)', fontSize:'19px'}}
      />
    </div>
  );
}

export default CitySearch;
