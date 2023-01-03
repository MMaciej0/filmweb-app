const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_FILTERS':
      return { ...state, filterVisibility: true };

    case 'HIDE_FILTERS':
      return { ...state, filterVisibility: false };

    case 'TOGGLE_FILTERS':
      return { ...state, filterVisibility: !state.filterVisibility };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        filteredMovies: [],
        searchValue: '',
        sortValue: '',
        selectedGenres: [],
      };

    case 'UPDATE_SEARCH_VALUE':
      if (state.searchValue.length === 1) {
        state.filteredMovies = [];
      }
      return { ...state, searchValue: action.payload };

    case 'SEARCH_MOVIE':
      const newMovies = action.payload.filter(
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

    default:
      return state;
  }
};

export default moviesReducer;
