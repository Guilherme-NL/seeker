import { Button } from "@ui5/webcomponents-react";
import { Input } from "@ui5/webcomponents-react";

import "./search-form.scss";

export default function SearchForm() {
  return (
    <form className="search-form">
      <Input className="custom-input" />
      <Button className="custom-button">Search</Button>
      <Button className="custom-button">Reset</Button>
    </form>
  );
}
