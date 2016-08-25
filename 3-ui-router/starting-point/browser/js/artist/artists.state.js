'use strict'

/* ------------ ARTIST ------------ */

juke.config( function( $stateProvider ){

	$stateProvider
		.state( 'artistState', {
			url: "/artists/:id",
			templateUrl: "/js/artist/artist.html",
			resolve: {
				artist : function( $stateParams, ArtistFactory ){
					return ArtistFactory.fetchById($stateParams.id);
				}
			},
			controller: 'ArtistCtrl'
		});

	$stateProvider
		.state( 'artistState.artistSongState', {
			url: "/songs",
			templateUrl: "/js/artist/artistSongs.html",
			controller: 'ArtistCtrl'
		});

	$stateProvider
		.state( 'artistState.artistAlbumsState', {
			url: "/albums",
			templateUrl: "/js/artist/artistAlbums.html",
			controller: 'ArtistCtrl'
		});

});

/* ------------ ARTISTSSSSSSSSSSS ------------ */

juke.config( function( $stateProvider ){

	$stateProvider
		.state( 'artistsState', {
			url: "/artists",
			templateUrl: "/js/artist/artists.html",
			resolve: {
				artists: function(ArtistFactory) {
					return ArtistFactory.fetchAll();
				}
			},
			controller: 'ArtistsCtrl'
		});

});

