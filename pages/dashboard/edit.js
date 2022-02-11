import DashboardPageTitle from 'components/Dashboard/DashboardPageTitle';
import DashboardLayout from 'components/Dashboard/DashbordLayout';
import DashboardEditUser from 'components/Dashboard/edit/DashboardEditUser';

const DashboardEdit = () => {
	return (
		<DashboardLayout>
			<DashboardPageTitle title="ویرایش اطلاعات" />
			<DashboardEditUser />
		</DashboardLayout>
	);
};

export default DashboardEdit;
