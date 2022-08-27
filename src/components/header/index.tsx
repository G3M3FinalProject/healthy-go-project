import Logo from '../../assets/logo.png';
import { motion } from 'framer-motion';

const Header = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<div>
				<div>
					<img src={Logo} alt="Logo" />
					<h1>Healthy Go</h1>
				</div>
				<div>
					<p>Cadastro</p>
					<p>Login</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Header;
