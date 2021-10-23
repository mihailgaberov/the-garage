import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface LevelsProps {
  data: string[];
  title: string;
  handleFiltering: (e: React.FormEvent<HTMLInputElement>) => void;
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
                 onClick={handleFiltering}
          />
            <span className="checkmark"/>
        </label>
      ))}
    </Container>
  );
};

export default Filters;
