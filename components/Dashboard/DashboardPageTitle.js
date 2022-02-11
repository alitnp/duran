import LoadingSpin from "components/UI/LoadingSpin/LoadingSpin";

const DashboardPageTitle = ({ title, loading }) => {
    return <h1 className='flex items-center pb-2 mb-6 text-xl border-b gap-x-2 border-d-border-gray'>
        {title} {loading && <LoadingSpin />}
    </h1>;
};

export default DashboardPageTitle;