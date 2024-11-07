import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getMessagesThunk } from "../../../store/slices/messagesSlice";
import styles from "./ChatList.module.sass";
import { ws } from "./../../../api";

function ChatList({ messages, isFetching, error, get, limit }) {
  const scrollTo = useRef(null);

  useEffect(() => {
    get(limit);
  }, [limit]);

  useEffect(() => {
    scrollTo?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const deleteMessage = (payload) => {
    ws.deleteMessage(payload);
  };

  return (
    <section className={styles.listWrapper}>
      <ul>
        {messages.map((m) => (
          <li key={m._id} className={styles.messageItem}>
            <div className={styles.itemBody}>
              <p>{m._id}</p>
              <p>{m.body}</p>
              <p>{m.createdAt}</p>
            </div>
            <div className={styles.controlsWrapper}>
              <button
                className={styles.btnDelete}
                onClick={() => deleteMessage(m._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div ref={scrollTo} className={styles.scrollAnchor}>
        {error && <div className={styles.errorMessage}>ERROR!!!</div>}
        {isFetching && <div>Messages is loading. Please, wait...</div>}
      </div>
    </section>
  );
}
const mapStateToProps = ({ chat }) => chat;
const mapDispatchToProps = (dispatch) => ({
  get: (limit) => dispatch(getMessagesThunk(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
