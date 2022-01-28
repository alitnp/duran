import { CgSpinner } from 'react-icons/cg';

const LoadingSpin = ({ className }) => {
	return <CgSpinner className={`animate-spin ${className}`} />;
};

export default LoadingSpin;
