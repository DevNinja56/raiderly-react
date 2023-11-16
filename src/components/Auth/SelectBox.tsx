import React from 'react';
import Select, { StylesConfig, type DropdownIndicatorProps, components } from 'react-select';
import ArrowDown from './icons/ArrowDown';
import { useLocation } from 'react-router';

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    cursor:"pointer",
    backgroundColor: 'white',
    border: "1px solid rgba(0, 0, 0, 0.25)",
    borderRadius: '61px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    width:"100%",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    backgroundImage: `url(/images/SignIn/Arrow Down (1).svg)`,
    backgroundSize: '20px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }),
  menu: (provided) => ({
    ...provided,
    marginTop:"5px",
    borderRadius:"14px",
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius:"14px",
  }),
  option: (provided,state) => ({
    ...provided,
    paddingTop:"20px",
    paddingLeft:"30px",
    paddingBottom:"20px",
    fontWeight:"600",
    backgroundColor: state.isSelected ? "#FF74251A" : "white",
    color:"black",
    cursor:"pointer",
  })
};

const options = [
  { value: 'Investors', label: 'Investors' },
  { value: 'Influencers', label: 'Influencers' },
];

const DropdownIndicator: React.FC<DropdownIndicatorProps> = props => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowDown />
      </components.DropdownIndicator>
    );
  };

const SelectBox = () => {
  const location = useLocation();
  
  const userType = location.pathname.includes('investors') ? 'Investors' : 'Influencers';

  const defaultValue = options.find(option => option.value === userType);
  return (
    <div className='w-7/12'>
    <Select
      options={options}
      placeholder="Select Option"
      styles={customStyles}
      components={{ DropdownIndicator }}
      defaultValue={defaultValue}
    />
    </div>
  );
};

export default SelectBox;
