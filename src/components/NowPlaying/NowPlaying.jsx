const NowPlaying = ({ selected, handleDeleteTrack, handleFormView }) => {
	if (!selected) return <h3>No details</h3>;
	return (
		<>
			<div>
				<h2>Title: {selected.title}</h2>
				<h3>Artist: {selected.artist}</h3>
				<div>
					<button onClick={() => handleFormView(selected)}>Edit Track</button>
					<button onClick={() => handleDeleteTrack(selected._id)}>
						Delete Track
					</button>
				</div>
			</div>
		</>
	);
};

export default NowPlaying;
