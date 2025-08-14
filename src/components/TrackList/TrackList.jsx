const TrackList = ({ tracks, handleSelect, handleFormView, isFormOpen }) => {
	return (
		<div>
			<h1>Track List</h1>
			<div>
				{!tracks.length ? (
					<h2>No Tracks Yet!</h2>
				) : (
					<ul>
						{tracks.map((track) => (
							<li
								key={track._id}
								style={{ cursor: "pointer", color: "#646cff" }}
								onClick={() => {
									handleSelect(track);
								}}>
								{track.title}
							</li>
						))}
					</ul>
				)}
			</div>
			<button onClick={handleFormView}>
				{isFormOpen ? "close form" : "New Track"}
			</button>
		</div>
	);
};

export default TrackList;
