export function actionSomethingCreator(input) {
  if (input === 0) {
    return { type: "UPDATE_SOMETHING", payload: "heyyyds" };
  }
  return { type: "UPDATE_SOMETHING", payload: "hello" };
}
