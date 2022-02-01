import DOption from 'components/UI/DOption/DOption';
import DSelect from 'components/UI/DSelect/DSelect';
import { useRouter } from 'next/router';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import routes from 'utils/constants/routes';

const ResultsOrderBy = ({ options }) => {
  //hooks
  const router = useRouter();

  //functions
  const getValue = (string) => {
    const splitted = string.split(/[?&=]+/);
    const index = splitted.findIndex((item) => item === 'orderby');
    return splitted[index + 1];
  };

  if (!options) return null;

  return (
    <div className='flex items-center w-40'>
      <FaSortAmountDownAlt className='ml-2' />

      <DSelect
        bordered={false}
        value={router.query.orderby || '0'}
        onChange={(e) =>
          router.push({
            pathname: routes.result.pathname,
            query: { ...router.query, orderby: e },
          })
        }
      >
        {options.map((item) => (
          <DOption key={item.Text} value={getValue(item.Value)}>
            {item.Text === 'Position' ? 'ترتیب' : item.Text}
          </DOption>
        ))}
      </DSelect>
    </div>
  );
};

export default ResultsOrderBy;
