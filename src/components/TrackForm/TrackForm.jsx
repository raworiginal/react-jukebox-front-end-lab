import { useState } from "react";

const TrackForm = ({ handleAddTrack, handleUpdateTrack, selected }) => {
	const intitialState = {
		title: "",
		artist: "",
	};
	const [formData, setFormData] = useState(selected ? selected : intitialState);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (selected) handleUpdateTrack(formData, selected._id);
		else handleAddTrack(formData);
	};

	const handleChange = (evt) => {
		setFormData({ ...formData, [evt.target.title]: evt.target.value });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">title: </label>
				<input
					type="text"
					title="title"
					id="title"
					value={formData.title}
					onChange={handleChange}
					required
				/>
				<label htmlFor="artist">artist: </label>
				<input
					type="text"
					title="artist"
					id="artist"
					value={formData.artist}
					onChange={handleChange}
				/>
				<button type="submit">
					{selected ? "Update Track" : "Add new Track"}
				</button>
			</form>
		</div>
	);
};

export default TrackForm;
