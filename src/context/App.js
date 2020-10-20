export const ACTIONS = {
  ADD_IMAGE: 'add-image',

}

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_IMAGE:
      return [...state, newImage(action.payload.image)];
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

function newImage(image) {
  return{ id: Date.now(), image: image}
}