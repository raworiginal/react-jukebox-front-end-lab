const TrackList = ({
	tracks,
	handleSelect,
	handleFormView,
	isFormOpen,
	handleDeleteTrack,
	selected,
}) => {
	return (
		<div className="container is-flex-direction-row">
			<h1 className="title is-1 has-text-centered">Track List</h1>
			<div className="container">
				{!tracks.length ? (
					<section>
						<h2>No Tracks Yet!</h2>
					</section>
				) : (
					<div className="grid is-col-min-12 is-gap-3">
						{tracks.map((track) => (
							<div key={track._id} className="cell">
								<article className="card is-flex is-flex-direction-column">
									<header className="card-header">
										<p className="card-header-title">{track.title}</p>
									</header>

									<div className="card-content is-flex-grow-1">
										<p className="content">{track.artist}</p>
									</div>

									<footer className="card-footer mt-auto">
										<button
											className="card-footer-item"
											onClick={() => handleSelect(track)}>
											Play
										</button>
										<button
											className="card-footer-item"
											onClick={() => handleFormView(track)}>
											Edit
										</button>
										<button
											className="card-footer-item"
											onClick={() => handleDeleteTrack(track._id)}>
											Delete
										</button>
									</footer>
								</article>
							</div>
						))}
					</div>
				)}
			</div>
			<div className="container">
				<a className="button" onClick={handleFormView}>
					{isFormOpen ? "close form" : "New Track"}
				</a>
			</div>
		</div>
	);
};

export default TrackList;
