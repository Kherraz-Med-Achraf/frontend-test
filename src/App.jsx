import Carrousel from './components/Carrousel/Carrousel.jsx';
import List from './components/List/List.jsx';
import RankingTable from './components/RankingTable/RankingTable.jsx';
import { useData } from './hooks/useData.js';

export default function App() {
	const { rankByTimeControl, isError, isLoading } = useData();

	if (isLoading) return <>Recherche des meilleurs joueurs...</>;
	if (isError) return <>Erreur de chargement des données</>;
	return (
		<main className='app'>
			<h1>Classement</h1>
			<Carrousel />
			<List />
			<RankingTable rankByTimeControl={rankByTimeControl} />
		</main>
	);
}
