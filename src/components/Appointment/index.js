import React from "react";
import "components/Appointment/styles.scss";
// import Header from "components/Appointment/Header"
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const CONFIRM = "CONFIRM";
  const SAVING = "SAVING";
  const DELETING = "DELETE";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //saves an appointment and updates database
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error) => {
        transition(ERROR_SAVE, true);
      });
  }

  //SHOWS confirm mode when pressing delete
  function onDelete() {
    transition(CONFIRM);
  }

  //return back and not delete. AFTER pressing delete
  function cancel() {
    transition(DELETING);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((error) => transition(ERROR_DELETE, true));
  }

  return (
    <article
      className="appointment appointment__separator"
      data-testid="appointment"
    >
      <header>{props.time}</header>

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={
            props.interview &&
            props.interview.interviewer &&
            props.interview.interviewer.name
          }
          id={props.id}
          onDelete={onDelete}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          student=""
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm
          id={props.id}
          cancelInterview={props.cancelInterview}
          onConfirm={cancel}
          onCancel={back}
          message="Are you sure you would like to delete?"
        />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message="Could not delete appointment"
          onClose={() => transition(SHOW)}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Could not save appointment" onClose={back} />
      )}
    </article>
  );
}
