import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface LevelsProps {
  data: string[];
  title: string;
}

const Filters: FunctionComponent<LevelsProps> = ({ title, data }) => {
  return (
    <Container>
      <h4>{title}</h4>
      {data.map((filter) => (
        <label key={filter} className="custom-radio">{filter}
          <input type="radio" name="radio" />
            <span className="checkmark"/>
        </label>
      ))}
    </Container>
  );
};

export default Filters;
