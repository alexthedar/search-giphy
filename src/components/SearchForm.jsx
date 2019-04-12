import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

export const SearchForm = props => {
  return (
    <React.Fragment>
      <Form style={{ display: "inline-flex", width: "100%" }}>
        <FormControl type="text" placeholder="Search" className="mr-md-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </React.Fragment>
  );
};

export default SearchForm;
