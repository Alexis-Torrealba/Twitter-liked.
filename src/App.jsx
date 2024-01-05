import './App.css';
import { TwitterCard } from './TwitterFollowCard';

const users = [
	{
		userName: 'Midudev',
		name: 'Miguel Ángel Durán',
		isFollowing: true,
	},
	{ userName: 'Ibai', name: 'Ibai Llnos', isFollowing: false },
	{
		userName: 'pheralb',
		name: 'Pablo Hernández',
		isFollowing: true,
	},
];

function App() {
	return (
		<section className="App">
			{users.map((user) => {
				const { userName, name, isFollowing } = user;
				return (
					<TwitterCard
						key={userName}
						userName={userName}
						initialIsFollowing={isFollowing}
					>
						{name}
					</TwitterCard>
				);
			})}
		</section>
	);
}

export { App };
