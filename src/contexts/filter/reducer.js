const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'SETUP_MOVIES':
      return {
        ...state,
        allMovies: action.payload,
        filteredMovies: action.payload,
      };

    case 'SHOW_FILTERS':
      return { ...state, filterVisibility: true };

    case 'HIDE_FILTERS':
      return { ...state, filterVisibility: false };

    case 'TOGGLE_FILTERS':
      return { ...state, filterVisibility: !state.filterVisibility };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        filteredMovies: state.allMovies,
        searchValue: '',
        sortValue: 'random',
        selectedGenres: [],
      };

    case 'UPDATE_SEARCH_VALUE':
      return { ...state, searchValue: action.payload };

    case 'SEARCH_MOVIE':
      const newMovies = state.filteredMovies.filter(
        (movie) =>
          movie.director
            .toLowerCase()
            .includes(state.searchValue.toLowerCase()) ||
          movie.title.toLowerCase().includes(state.searchValue.toLowerCase()) ||
          movie.actors.toLowerCase().includes(state.searchValue.toLowerCase())
      );
      if (window.innerWidth <= 1020) {
        state.filterVisibility = false;
      }
      return { ...state, filteredMovies: newMovies };

    case 'UPDATE_SELECTED_GENRES':
      const newSelectedGenres = state.selectedGenres.includes(action.payload)
        ? state.selectedGenres.filter((genre) => genre !== action.payload)
        : state.selectedGenres.concat(action.payload);
      return { ...state, selectedGenres: newSelectedGenres };

    case 'UPDATE_SORT':
      return { ...state, sortValue: action.payload.toLowerCase() };

    case 'APPLY_FILTERS':
      if (
        !state.selectedGenres.length &&
        state.sortValue.toLowerCase() === 'random'
      ) {
        return { ...state };
      } else {
        let moviesAfterApplyFilters = [];
        state.selectedGenres.forEach((stateGenre) => {
          state.allMovies.forEach((movie) => {
            movie.genres.forEach((movieGenre) => {
              if (stateGenre.toLowerCase() === movieGenre.toLowerCase()) {
                moviesAfterApplyFilters = [...moviesAfterApplyFilters, movie];
              }
            });
          });
        });

        switch (state.sortValue) {
          case 'random':
            break;
          case 'oldest':
            moviesAfterApplyFilters.sort(
              (a, b) => Number(a.year) - Number(b.year)
            );
            break;
          case 'newest':
            moviesAfterApplyFilters.sort(
              (a, b) => Number(b.year) - Number(a.year)
            );
            break;
          default:
            break;
        }

        if (window.innerWidth <= 1020) {
          state.filterVisibility = false;
        }

        return { ...state, filteredMovies: moviesAfterApplyFilters };
      }

    default:
      return state;
  }
};

export default moviesReducer;
