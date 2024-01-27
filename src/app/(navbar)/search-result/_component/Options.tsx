import useOptions from "../_hooks/useOptions";
import Option from "./Option";

const Options = () => {
  const { customOptionsArr, updateOptions } = useOptions();

  return (
    <div className="sticky top-[48px] bg-white z-10 flex flex-wrap gap-2 py-5">
      {customOptionsArr.map(
        ([tagName, values]) =>
          Array.isArray(values) &&
          values?.map((value: string) => (
            <Option
              key={value}
              handleDelete={updateOptions}
              value={value}
              disabled={tagName === "maxPrice" || tagName === "keyword"}
            />
          )),
      )}
    </div>
  );
};

export default Options;
