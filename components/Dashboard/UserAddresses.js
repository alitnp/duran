import Tooltip from "components/UI/Tooltip/Tooltip";
import { useSelector } from "react-redux";
import { BiTrash } from "react-icons/bi";
import { Popconfirm } from "antd";
import apiServices from "utils/services/apiServices";
import endpointUrls from "utils/constants/endpointUrls";
import { useDispatch } from "react-redux";
import { getUserAddresses } from "redux/middlewares/user/getUserAddresses";

const UserAddresses = ({ className, noTrash }) => {
  //states
  const { userAddresses } = useSelector((state) => state.user);

  //hooks
  const dispatch = useDispatch();

  //functions
  const handleDelete = async (id) => {
    const result = await apiServices.remove(
      endpointUrls.deleteAddress + "?addressId=" + id
    );
    if (result.isSuccess) dispatch(getUserAddresses());
  };

  return (
    <div>
      {userAddresses?.map((item) => {
        return (
          <div
            key={item.Id}
            className={`flex flex-col items-start justify-between sm:flex-row sm:items-center ${className}`}
          >
            <p className="mb-0">
              {item.StateProvinceName +
                " - " +
                item.City +
                " - " +
                item.Address1}
            </p>
            {!noTrash && (
              <Popconfirm
                title="این آدرس حذف شود؟"
                onConfirm={() => handleDelete(item.Id)}
              >
                <div className="flex items-center cursor-pointer gap-x-2 text-d-primary">
                  <span>حذف</span>
                  <BiTrash />
                </div>
              </Popconfirm>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UserAddresses;
