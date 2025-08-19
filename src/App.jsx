import * as trackService from "./services/trackService";
import { useState, useEffect } from "react";
import TrackList from "./components/TrackList/TrackList";
import NowPlaying from "./components/NowPlaying/NowPlaying";
import TrackForm from "./components/TrackForm/TrackForm";

const App = () => {
	const [tracks, setTracks] = useState([]);
	const [selected, setSelected] = useState(null);
	const [isFormOpen, setIsFormOpen] = useState(false);

	useEffect(() => {
		const fetchTracks = async () => {
			try {
				const fetchedTracks = await trackService.index();
				if (fetchedTracks.error) {
					throw new Error(fetchedTracks.error);
				}
				setTracks(fetchedTracks);
			} catch (error) {
				console.error(error);
			}
		};
		fetchTracks();
	}, []);

	const handleSelect = (track) => {
		setSelected(track);
		setIsFormOpen(false);
	};

	const handleFormView = (track) => {
		track._id ? setSelected(track) : setSelected(null);
		setIsFormOpen(true);
	};
	const handleEditSelect = (track) => {
		setSelected(track);
		setIsFormOpen(true);
		hand;
	};
	const handleAddTrack = async (formData) => {
		try {
			const newTrack = await trackService.create(formData);
			if (newTrack.error) {
				throw new Error(newTrack.err);
			}
			setTracks([newTrack, ...tracks]);
			setIsFormOpen(false);
			setSelected(newTrack);
		} catch (error) {
			console.error(error);
		}
	};

	const handleUpdateTrack = async (formData, trackId) => {
		try {
			const updatedTrack = await trackService.update(formData, trackId);
			if (updatedTrack.error) throw new Error(updatedTrack.error);

			const updatedTrackList = tracks.map((track) =>
				track._id !== updatedTrack._id ? track : updatedTrack
			);

			setTracks(updatedTrackList);
			setSelected(updatedTrack);
			setIsFormOpen(false);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDeleteTrack = async (trackId) => {
		try {
			const deletedTrack = await trackService.deleteTrack(trackId);
			if (deletedTrack.error) throw new Error(deletedTrack.error);
			const updatedTrackList = tracks.filter((track) => track._id !== trackId);
			setTracks(updatedTrackList);
			setIsFormOpen(false);
			setSelected(null);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<section className="container is-max-desktop">
				<TrackList
					tracks={tracks}
					handleSelect={handleSelect}
					handleFormView={handleFormView}
					isFormOpen={isFormOpen}
					handleDeleteTrack={handleDeleteTrack}
					selected={selected}
				/>
				{isFormOpen ? (
					<TrackForm
						handleAddTrack={handleAddTrack}
						handleUpdateTrack={handleUpdateTrack}
						selected={selected}
					/>
				) : (
					<NowPlaying selected={selected} />
				)}
			</section>
		</>
	);
};

export default App;
