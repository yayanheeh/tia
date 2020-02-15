import React, { Component } from 'react';
// Component styles
import styles from './styles';


function ResponsiveImage( { src, width, height } ) {
  return (
    <div
      style={ { 
        width,
      } }
      className="responsive-image">
      <div style={ {
          paddingBottom: ( height / width * 100 ) + '%'
        } } />
      <img
        src={ src }
        className="responsive-image__image" />
    </div>
  );
}

ReactDOM.render(
  <ResponsiveImage
    src="https://lorempixel.com/1200/800/"
    width={ 1200 }
    height={ 800 } />,
  document.getElementById( 'app' )
);


