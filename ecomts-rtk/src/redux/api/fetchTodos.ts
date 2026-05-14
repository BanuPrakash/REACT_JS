import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchTodos = createAsyncThunk(
  'todos/fetch',
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  },
)

type Todo = {
    id: number,
    title: string,
    completed: boolean
}

export  type {Todo};

type TodosState = {
    status : "loading" | "idle",
    error: string | null,
    list: Todo[]
}

const initialState: TodosState = {
    status: "idle",
    error: null,
    list: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
    },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
     state.status = "loading";
     state.error = null;
     state.list = []
    });
    builder.addCase(fetchTodos.fulfilled, (state, action:PayloadAction<Todo[]>) => {
     state.status = "idle";
     state.error = null;
     state.list.push(...action.payload)
    });
    builder.addCase(fetchTodos.rejected, (state) => {
     state.status = "idle";
     state.error = "Error fetching todos!!!";
     state.list = []
    });
}})

export const todoReducer = todoSlice.reducer
