import { userReducer } from './reducers/user'
import { tasksReducer } from './reducers/tasks'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch