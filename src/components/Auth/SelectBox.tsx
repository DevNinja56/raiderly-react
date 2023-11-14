import React, { useEffect, useState } from 'react';
import Select, { StylesConfig, type DropdownIndicatorProps, components } from 'react-select';
import ArrowDown from './icons/ArrowDown';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constant/route';

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
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
    borderRadius:"14px",
    padding:"0px",
  }),
  option: (provided) => ({
    ...provided,
    paddingTop:"16px",
    paddingBottom:"16px",
    borderBottom:"1px solid rgba(0, 0, 0, 0.25)"
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
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleOptionChange = (selected : any) => {
    setSelectedOption(selected);
    if (selected.value === 'Investors') {
      navigate(ROUTES.CONTACT_US);
    } else if (selected.value === 'Influencers') {
      navigate(ROUTES.CONTACT_US);
    }
  };

  useEffect(() => {
    const currentRoute = window.location.pathname;
    if (currentRoute === ROUTES.CONTACT_US) {
      setSelectedOption(options[0]);
    } else if (currentRoute === ROUTES.CONTACT_US) {
      setSelectedOption(options[1]);
    }
  }, []);
  return (
    <Select
    options={options}
    value={selectedOption}
    onChange={handleOptionChange}
    placeholder="Select Option"
    styles={customStyles}
    components={{ DropdownIndicator }}
    />
  );
};

export default SelectBox;
