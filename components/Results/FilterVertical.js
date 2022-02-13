import DInput from "components/UI/DInput/DInput";
import { BiFilterAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import DSelect from "components/UI/DSelect/DSelect";
import DOption from "components/UI/DOption/DOption";
import { useRouter } from "next/router";
import routes from "utils/constants/routes";
import ResultFilterColors from "components/Results/ResultFilerColors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBrandsList } from "redux/middlewares/brands/getBrandsList";
import ResultsFilters from "components/Results/ResultsFilters";

const FilterVertical = () => {
  //states
  const { searchResults } = useSelector((state) => state.result);
  const { brandsList } = useSelector((state) => state.brands);

  //hooks
  const router = useRouter();
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    !brandsList && dispatch(getBrandsList());
  }, []);

  return (
    <div className="sticky flex-grow-0 hidden w-40 h-full ml-6 top-16 lg:block">
      <div className="flex h-[34px] items-center border-b ">
        <BiFilterAlt />
        فیلترها
      </div>

      <ResultsFilters />
    </div>
  );
};

export default FilterVertical;
