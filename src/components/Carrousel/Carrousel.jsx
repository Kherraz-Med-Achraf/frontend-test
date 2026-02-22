// ---------------------------------------------------------------------------------------------------------------------
//!                                                       Imports
// ---------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------- React & redux ----------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------- Redux State Management ------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------- Components ------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------- Hooks & Utils ----------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------- Styles & Assets ---------------------------------------------------
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTimeControl } from '../../DataManagement/reducers/timeControlsReducer';
import './carrousel.scss';
// ---------------------------------------------------------------------------------------------------------------------

const Carrousel = () => {
	const dispatch = useDispatch();
	const timeControls = useSelector(
		(state) => state.timeControlsReducer.timeControls
	);
	const selectedTimeControl = useSelector(
		(state) => state.timeControlsReducer.selectedTimeControl
	);

	const currentIndex = timeControls.indexOf(selectedTimeControl);

	const handlePrev = () => {
		const prevIndex =
			currentIndex <= 0 ? timeControls.length - 1 : currentIndex - 1;
		dispatch(setSelectedTimeControl(timeControls[prevIndex]));
	};

	const handleNext = () => {
		const nextIndex =
			currentIndex >= timeControls.length - 1 ? 0 : currentIndex + 1;
		dispatch(setSelectedTimeControl(timeControls[nextIndex]));
	};

	return (
		<div>
			<button onClick={handlePrev}>{'<'}</button>
			Carrousel : {selectedTimeControl}
			<button onClick={handleNext}>{'>'}</button>
		</div>
	);
};

export default Carrousel;
