import React, { useState, useEffect } from 'react';
import { Stack, Rating, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from 'contexts/global/global';
import { countAverageFromArray } from 'utils/array';
import { overwiteMovie } from 'utils/http';

const containerStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: { xs: '4rem 1rem', lg: '4rem 15%' },
  marginBlock: '4rem',
  backgroundColor: 'hsl(var(--secondary), 0.1)',
  gap: '3rem',
};

const ratingStyle = {
  fontSize: { xs: '2.8rem', sm: '4rem' },
  color: 'hsl(var(--highlight))',
};

const buttonStyle = {
  fontSize: '1.6rem',
  fontWeight: 'bold',
  padding: '1rem 3rem',
  color: 'hsl(var(--primary))',
  borderColor: 'hsl(var(--highlight))',
  transition: 'var(main-transition)',
  '&:hover': {
    backgroundColor: 'hsl(var(--highlight))',
    borderColor: 'hsl(var(--highlight))',
  },
};

const errorMessageStyle = {
  position: 'absolute',
  top: '90%',
  textAlign: 'center',
  backgroundColor: 'hsl(var(--highlight))',
  padding: '1rem',
  borderRadius: 'var(--radius)',
  fontWeight: 'bold',
  letterSpacing: '1px',
};

const MovieRating = ({ movie }) => {
  const [ratingValue, setRatingValue] = useState(null);
  const [isRatingError, setIsRatingError] = useState(false);
  const { user, movies } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isRatingError) {
      setTimeout(() => {
        setIsRatingError(false);
      }, 3000);
    }
  }, [isRatingError]);

  useEffect(() => {
    if (user && movie.usersRate) {
      const userRate = movie.usersRate.find((rate) => rate.userID === user.uid);
      if (userRate) {
        setRatingValue(userRate.userRate);
      }
    }
  }, [movie]);

  const handleRateBtn = () => {
    if (!ratingValue) return setIsRatingError(true);
    let newMovie = movie;
    const userRate = { userID: user.uid, userRate: ratingValue };
    // update/add user rate
    if (newMovie.usersRate) {
      const userRateIndex = newMovie.usersRate.findIndex(
        (rate) => rate.userID === user.uid
      );
      if (userRateIndex !== -1) {
        newMovie.usersRate[userRateIndex].userRate = ratingValue;
      } else {
        newMovie.usersRate.push(userRate);
      }
    } else {
      newMovie = { ...movie, usersRate: [userRate] };
    }
    // count movie rating based on all users rates
    newMovie.rating = countAverageFromArray(newMovie.usersRate, 'userRate');
    // update movies database
    const index = movies.findIndex((movie) => movie.id === newMovie.id);
    overwiteMovie(index, newMovie);
  };

  const handleRatingChange = (e) => {
    setRatingValue(Number(e.target.value));
  };

  return (
    <Stack sx={containerStyle}>
      {user ? (
        <>
          <Typography variant="h3">Your Rating:</Typography>
          <Rating
            sx={ratingStyle}
            value={ratingValue}
            onChange={handleRatingChange}
            precision={0.5}
            max={10}
          />
          <Button sx={buttonStyle} variant="outlined" onClick={handleRateBtn}>
            Rate!
          </Button>
          {isRatingError ? (
            <Typography variant="p" sx={errorMessageStyle}>
              Plase rate movie on half star, at least.
            </Typography>
          ) : null}
        </>
      ) : (
        <>
          <Typography
            variant="p"
            sx={{
              fontSize: '2rem',
            }}
          >
            Please login first, to rate this movie
          </Typography>
          <Button
            sx={buttonStyle}
            variant="outlined"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </>
      )}
    </Stack>
  );
};

export default MovieRating;
