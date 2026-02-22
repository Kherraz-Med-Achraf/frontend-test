import './RankingTable.scss';

const RankingTable = ({ rankByTimeControl }) => {
	return (
		<div className='ranking-table'>
			{rankByTimeControl.map(([key, values]) => (
				<div className='ranking-table-group' key={key}>
					<h2 className='ranking-table-title'>{key}</h2>
					<div className='ranking-table-list'>
						{values.map((x) => (
							<p key={x.name} className='ranking-table-item'>
								{x.name} - {x.score}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default RankingTable;
