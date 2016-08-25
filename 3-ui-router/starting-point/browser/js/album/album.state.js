'use strict'


/* ------------ ALBUM ------------ */

juke.config( function( $stateProvider ){

	$stateProvider
		.state( 'albumState', {
			url: "/albums/:id",
			templateUrl: "/js/album/album.html",
			resolve: {
				album: function( $stateParams, AlbumFactory ){
					return AlbumFactory.fetchById($stateParams.id);
				}
			},
			controller: 'AlbumCtrl'

		});
		
});


/* ------------ ALBUMSSSSSSSSSSS ------------ */

juke.config( function( $stateProvider ){

	$stateProvider
		.state( 'albumsState', {
			url: "/albums",
			templateUrl: "/js/album/albums.html",
			resolve: { 
				albums: function(AlbumFactory){
					return AlbumFactory.fetchAll();
				}
			},
			controller: 'AlbumsCtrl'
		});

});