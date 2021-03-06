'use strict';

/**
 * This connector is for BeMusic music streaming engine.
 * The connector currently covers Youtubify and GrooveMP3 music services.
 */

Connector.playerSelector = '#player-controls';

Connector.getArtist = () => {
	let artist = $('.current-track .info .artist').first();
	return artist.get(0).firstChild.textContent;
};

Connector.trackSelector = '.current-track .info .track-name';

Connector.trackArtSelector = '.current-track img';

Connector.durationSelector = '.track-length';

Connector.currentTimeSelector = '.elapsed-time';

Connector.isPlaying = () => {
	return $('#player-controls .icon-pause').is(':visible');
};

Connector.getUniqueID = () => {
	try {
		let lastTrack = JSON.parse(localStorage.getItem('last-track'));
		if (lastTrack) {
			return lastTrack.value.id.toString();
		}
	} catch (e) {
	}

	return null;
};
