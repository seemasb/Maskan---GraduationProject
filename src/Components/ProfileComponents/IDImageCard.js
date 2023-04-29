import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: theme.spacing(1),
  },
}));

const ImageUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

function IDImageCard({ idImage, onUpload, onDelete }) {
  const classes = useStyles();
  const [image, setImage] = useState(idImage);

  const handleUploadClick = (event) => {
    // Handle image upload logic here
    // ...
    // Update state with new image
    setImage('path/to/new/image');
    // Callback to parent component to update data
    onUpload('path/to/new/image');
  };

  const handleDeleteClick = (event) => {
    // Handle image delete logic here
    // ...
    // Update state to remove image
    setImage(null);
    // Callback to parent component to update data
    onDelete();
  };

  return (
    <Card className={classes.root}>
      {image ? (
        <CardMedia className={classes.media} image={image} />
      ) : (
        <ImageUploadContainer>
          <Typography variant="body1" color="textSecondary">
            No ID image uploaded
          </Typography>
        </ImageUploadContainer>
      )}
      <CardActions className={classes.cardActions}>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          onClick={handleUploadClick}
          disabled={image}
        >
          {image ? 'Re-upload' : 'Upload'}
        </Button>
        {image && (
          <IconButton aria-label="delete" onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

IDImageCard.propTypes = {
  idImage: PropTypes.string,
  onUpload: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

IDImageCard.defaultProps = {
  idImage: null,
};

export default IDImageCard;
