export const createActionCreator = (type) => (payload) => {
  return { type, payload }
}
