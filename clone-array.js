try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "cloneArray",
		[
		],
		function construct( ){
			var cloneArray = function cloneArray( array ){
				if( !( array instanceof Array ) ){
					throw new Error( "invalid array" );
				}
				
				var arrayLength = array.length;
				var clonedArray = [ ];
				
				var element;
				for( var index = 0; index < arrayLength; index++ ){
					element = array[ index ];
					if( element instanceof Array ){
						element = cloneArray( element );
					}
					clonedArray.push( element );
				}

				return cloneArray;
			};

			base.cloneArray = cloneArray;
		} );
} )( base );