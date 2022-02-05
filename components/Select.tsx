import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';
import { optionCSS } from 'react-select/dist/declarations/src/components/Option';
// import { ColourOption, colourOptions } from './docs/data';

interface State {
    readonly inputValue: string;
}

interface OptionType {
    readonly label: string;
    readonly value: string;
}

const optionValues: readonly OptionType[] = [
    { label: 'Não Definida', value: '0' },
    { label: 'Comercial 1', value: '1' },
    { label: 'Comercial 2', value: '2' },
    { label: 'Comercial 3', value: '3' },
    { label: 'Comercial 4', value: '4' }
]

const filterOptions = (search: string) => {
  return optionValues.filter((i) =>
    i.label.toLowerCase().includes(search.toLowerCase())
  );
};

const filterOptionById = (id: string) => {
    return optionValues.find((i) => i.value === id)
}

const loadOptions = (
  inputValue: string,
  callback: (options: OptionType[]) => void
) => {
  
  callback(filterOptions(inputValue));
  
};

export default class WithCallbacks extends Component<{ label: string, value: any, id?: string }, State> {
  state: State = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
      this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <div>
        <label htmlFor="">{ this.props.label }</label>
        <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions
            defaultValue={filterOptionById(this.props.id ? this.props.id : '')}
            onInputChange={this.handleInputChange}
            onChange={this.props.value}
            id="category-select"
            instanceId="category-select"
            theme={(theme) => ({
                ...theme,
                // borderRadius: 0,
                colors: {
                    ...theme.colors,
                    primary: 'rgb(21 128 61)',
                    primary75: 'rgb(22 163 74)',
                    primary50: 'rgb(21 128 61)',
                    primary25: 'rgb(229 231 235)',
                    },
                })
            }
        />
      </div>
    );
  }
}
