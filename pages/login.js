import PageTitle from 'components/Home/PageTitle/PageTitle';
import Layout from 'components/Layout/Layout';
import LoginForm from 'components/Login/LoginForm';
import RegisterForm from 'components/Login/RegisterForm';

const Login = () => {
	return (
		<Layout>
			<div className='  w-full min-h-[600px] max-w-[1000px] shadow-xl border mx-auto my-16 rounded-md overflow-hidden flex '>
				<PageTitle className='  w-1/2 hidden sm:block' />
				<div className=' w-full p-4 md:p-10 sm:w-2/3 md:w-1/2 flex flex-col justify-center '>
					<LoginForm />
					<RegisterForm />
				</div>
			</div>
		</Layout>
	);
};

export default Login;
