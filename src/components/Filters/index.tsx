import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface LevelsProps {
  data: string[];
  title: string;
  handleFiltering: (filter: Filter) => void;
}

export interface Filter {
  type: string;
  value: string;
}

const Filters: FunctionComponent<LevelsProps> = ({ title, data, handleFiltering }) => {
  return (
    <Container>
      <h4>{title}</h4>
      {data.map((filter) => (
        <label key={filter} className="custom-radio">{filter}
          <input value={filter}
                 type="radio"
                 name={`${title}`}
                 onClick={(e) => handleFiltering({type: title, value: e.currentTarget.value})}
          />
            <span className="checkmark"/>
        </label>
      ))}
    </Container>
  );
};

export default Filters;
