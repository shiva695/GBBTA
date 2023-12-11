import PropTypes from "prop-types";
const SettingsInput = ({ label, value, valueChange, placeholder }) => {
  return (
    <div className="self-stretch justify-start items-center inline-flex w-full">
      <div className="w-[177px] text-typo-primary text-sm font-normal  leading-tight">
        {label}
      </div>
      <div className="grow shrink basis-0 h-10 px-4 py-2.5 w-full rounded-lg border border-[#2B2E30] justify-start items-center gap-2 flex">
        <input
          value={value}
          className="bg-transparent outline-none text-typo-secondary w-full"
          placeholder={placeholder}
          onChange={valueChange}
        />
      </div>
    </div>
  );
};

SettingsInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  valueChange: PropTypes.func,
};

export default SettingsInput;
