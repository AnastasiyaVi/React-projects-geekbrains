export const selectMessages = (state, chatId) =>
  state.messages.messages[chatId] ?? [];
