const NowPlaying = ({ selected }) => {
	if (!selected)
		return (
			<div className="container is-max-tablet">
				<h1 className="title is-5 has-text-centered">Choose a song</h1>
			</div>
		);
	return (
		<>
			<div className="container is-max-tablet">
				<div className="card has-background-primary">
					<h1 className="title is-1 has-text-centered">Now Playing</h1>
					<div className="container">
						<h2 className="title is-4">Title: {selected.title}</h2>
						<h3 className="subtitle is-8">Artist: {selected.artist}</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default NowPlaying;
