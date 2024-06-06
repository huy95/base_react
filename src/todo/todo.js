import React, { useReducer, useRef } from "react";

// Action types
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

// Initial state
const initState = {
    job: "",
    jobs: []
};

// Action creators
const setJobAction = payload => ({ type: SET_JOB, payload });
const addJobAction = payload => ({ type: ADD_JOB, payload });
const deleteJobAction = payload => ({ type: DELETE_JOB, payload });

// Helper functions for state updates
const setJob = (state, payload) => ({
    ...state,
    job: payload
});

const addJob = (state, payload) => ({
    ...state,
    jobs: [...state.jobs, payload]
});

const deleteJob = (state, payload) => ({
    ...state,
    jobs: state.jobs.filter((_, index) => index !== payload)
});

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return setJob(state, action.payload);
        case ADD_JOB:
            return addJob(state, action.payload);
        case DELETE_JOB:
            return deleteJob(state, action.payload);
        default:
            throw new Error(`Invalid Action: ${action.type}`);
    }
};

// AppTodo component
function AppTodo() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;
    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJobAction(job));
        dispatch(setJobAction(""));
        inputRef.current.focus();
    };

    return (
        <div>
            <h3>
                <input
                    ref={inputRef}
                    value={job}
                    placeholder="enter todo ...."
                    onChange={e => {
                        dispatch(setJobAction(e.target.value));
                    }}
                />
                <button onClick={handleSubmit}>Add</button>
                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>
                            {job}
                            <span
                                style={{ cursor: "pointer", marginLeft: "10px" }}
                                onClick={() => dispatch(deleteJobAction(index))}
                            >
                                &times;
                            </span>
                        </li>
                    ))}
                </ul>
            </h3>
        </div>
    );
}

export default AppTodo;
