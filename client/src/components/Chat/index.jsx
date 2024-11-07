import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import styles from "./Chat.module.sass";

function Chat() {
  return (
    <article className={styles.chatWrapper}>
      <ChatList />
      <ChatForm />
    </article>
  );
}

export default Chat;
