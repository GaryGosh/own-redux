const VIDEOS_ACTIONS = {
  ADD_VIDEO: "ADD_VIDEO",
};

function videos(
  state = {
    data: [],
  },
  action
) {
  switch (action.type) {
    case VIDEOS_ACTIONS.ADD_VIDEO:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}

module.exports = videos;
