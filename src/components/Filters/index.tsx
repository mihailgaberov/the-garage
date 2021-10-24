import React, { FunctionComponent, useEffect, useRef } from 'react';
import { Container } from "./styles";

interface LevelsProps {
  data: string[];
  title: string;
  handleFiltering: (filter: Filter) => void;
  isReset: boolean;
}

export interface Filter {
  type: string;
  value: string;
}

const Filters: FunctionComponent<LevelsProps> = ({ title, data, handleFiltering, isReset }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (isReset && formRef.current) {
      // @ts-ignore
      formRef.current.reset();
    }
  }, [isReset]);

  return (
    <Container>
      <h4>{title}</h4>
      <form ref={formRef}>
        {data.map((filter) => (
          <label key={filter} className="custom-radio">{filter}
            <input value={filter}
                   type="radio"
                   defaultChecked={false}
                   name={`${title}`}
                   onClick={(e) => handleFiltering({type: title, value: e.currentTarget.value})}
            />
            <span className="checkmark"/>
          </label>
        ))}
      </form>
    </Container>
  );
};

export default Filters;
