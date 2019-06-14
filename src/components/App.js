import React from "react";
// import SearchBar from "./SearchBar";
import CardExampleCardProps from "./ImageList";
import SearchExampleStandard from "./Hanap";
import { Grid, Image } from "semantic-ui-react";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      {/* //<SearchBar /> */}
      <SearchExampleStandard />
      <Grid relaxed columns={4}>
        <Grid.Column>
          <CardExampleCardProps />
        </Grid.Column>
        <Grid.Column>
          <CardExampleCardProps />
        </Grid.Column>
        <Grid.Column>
          <CardExampleCardProps />
        </Grid.Column>
        <Grid.Column>
          <CardExampleCardProps />
        </Grid.Column>
      </Grid>

      {/*<CardExampleCardProps />
      <CardExampleCardProps apinum="105" />
      <CardExampleCardProps apinum="107" /> */}
    </div>
  );
};

export default App;
