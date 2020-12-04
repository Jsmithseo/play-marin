import React, { useReducer } from "react"
import styles from "./form.module.css"

const INITAL_STATE = {
  name: ``,
  email: ``,
  subject: ``,
  body: ``,
  status: `IDLE`,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value }

    case "updatesStatus":
      return { ...state, status: action.status }

    case "reset":

    default:
      return INITAL_STATE
  }
}

const Newsletter = () => {
  const [state, dispatch] = useReducer(reducer, INITAL_STATE)

  const setStatus = status => dispatch({ type: "updatesStatus", status })

  console.log({ state })

  const updateFieldValue = field => event => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setStatus("PENDING")
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setStatus("SUCCESS")
      })
      .catch(error => {
        console.error(error)
        setStatus("ERROR")
      })
  }

  if (state.status === "SUCCESS") {
    return (
      <p className={styles.success}>
        Message Sent!
        <button
          type="reset"
          onClick={() => dispatch({ type: "reset" })}
          className={`${styles.button} ${styles.centered}`}
        >
          Reset
        </button>
      </p>
    )
  }

  return (
    <>
      {state.status === "ERROR" && (
        <p className={styles.error}>
          {" "}
          Something went wrong. Please try again.{" "}
        </p>
      )}
      <form
        className={`${styles.form} ${
          state.status === "PENDING" && styles.pending
        }`}
        onSubmit={handleSubmit}
      >
        <h3>Sign up for our Newsletter</h3>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={state.name}
            onChange={updateFieldValue("name")}
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={state.email}
            onChange={updateFieldValue("email")}
          />
        </label>
        <button className={styles.button}>Send</button>
      </form>
    </>
  )
}

export default Newsletter
