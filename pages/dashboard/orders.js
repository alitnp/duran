import { Descriptions } from 'antd';
import DashboardPageTitle from 'components/Dashboard/DashboardPageTitle';
import DashboardLayout from 'components/Dashboard/DashbordLayout';

const DashboardOrders = () => {
	return (
		<DashboardLayout>
			<DashboardPageTitle title="خرید های من" />
			<Descriptions
				layout='vertical'
				bordered
				column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
			>
				<Descriptions.Item label='نام'>
					<span>سینبسیب</span>
				</Descriptions.Item>
				<Descriptions.Item label='نام خانوادگی'>
					<span>سینبسیب</span>
				</Descriptions.Item>
				<Descriptions.Item label='آدرس ایمیل'>
					<span>سینبسیب</span>
				</Descriptions.Item>
				<Descriptions.Item label='شماره تلفن' span={1}>
					<span>سینبسیب</span>
				</Descriptions.Item>
			</Descriptions>
			<Descriptions layout='vertical' bordered>
				<Descriptions.Item label='آدرس'>
					Data disk type: MongoDB
					<br />
					Database version: 3.4
					<br />
					Package: dds.mongo.mid
					<br />
					Storage space: 10 GB
					<br />
					Replication factor: 3
					<br />
					Region: East China 1
				</Descriptions.Item>
			</Descriptions>
		</DashboardLayout>
	);
};

export default DashboardOrders;
