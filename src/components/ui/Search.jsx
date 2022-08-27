import { useNavigate } from "react-router-dom";
import search from "../../assets/icons/search.svg"

export const Search = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed");
      navigate(`search/${e.target.value}`);
    }
  };

  return (
    <div className="search">
      <img src={search} alt="" />
      <input
        className="search__input"
        type="text"
        placeholder="Search movies"
        onKeyDown={handleSearch}
      />
    </div>
  );
};
