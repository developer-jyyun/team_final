import useOptions from "../_hooks/useOptions";
import Option from "./Option";

const Options = () => {
  const { customOptionsArr, updateOptions } = useOptions();

  return (
    <div className="flex flex-wrap gap-2 my-5">
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
