import PropTypes from "prop-types";

const SettingsSocialInput = ({ img, label, value, valueChange }) => {
  return (
    <div className="self-stretch justify-start items-center inline-flex">
      <div className="w-[177px] flex flex-row gap-[6px] items-center">
        <img className="h-8 w-8" src={img} />
        <div className="text-typo-primary text-sm font-normal  leading-tight">
          {label}
        </div>
      </div>
      <div className="grow shrink basis-0 h-10 px-4 py-2.5 rounded-lg border border-[#2B2E30] justify-start items-center gap-2 flex">
        <input
          value={value}
          onChange={valueChange}
          className="bg-transparent outline-none text-typo-secondary w-full"
        />
      </div>
    </div>
  );
};
SettingsSocialInput.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  valueChange: PropTypes.func,
};

export default SettingsSocialInput;
