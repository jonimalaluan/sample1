import React from "react";
import SearchBar from "./SearchBar";
import CardExampleCardProps from "./Cardsample";
import SearchExampleStandard from "./Hanap";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar />
      {/* <SearchExampleStandard />
      <CardExampleCardProps />
      <CardExampleCardProps apinum="105" />
      <CardExampleCardProps apinum="107" /> */}
    </div>
  );
};

export default App;
