import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { artworkUrl100, collectionName, artistName, collectionId } = this.props;
    return (

      <div>
        <img src={ artworkUrl100 } alt={ collectionName } />
        <h4>{collectionName}</h4>
        <span>{artistName}</span>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          Acessar

        </Link>
      </div>
    );
  }
}
Card.propTypes = {
  artworkUrl100: PropTypes.string,
  collectionName: PropTypes.string,
  artistName: PropTypes.string,
}.isRequired;
