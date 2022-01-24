import PageTitle from 'components/Home/PageTitle/PageTitle';
import Layout from 'components/Layout/Layout';
import LoginForm from 'components/Login/LoginForm';
import Register from 'components/Login/Register';

const Login = () => {
	return (
		<Layout>
			<div className='  w-full min-h-[500px] max-w-[1000px] shadow-xl border mx-auto my-16 rounded-md overflow-hidden flex '>
				<PageTitle className='hidden w-1/2  sm:block' />
				<div className='flex flex-col justify-center w-full p-4  md:p-10 sm:w-2/3 md:w-1/2'>
					<LoginForm />
					<Register />
				</div>
			</div>
		</Layout>
	);
};

export default Login;
