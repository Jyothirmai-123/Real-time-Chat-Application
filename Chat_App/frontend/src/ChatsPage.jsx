/*import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '59a09ca6-33d5-4c55-b464-b7dd366fb21c', 
        props.user.username, 
        props.user.secret
    );
  return (
  <div style={{ height: '100vh' }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
  </div> 
  ) 
 
};

export default ChatsPage;*/

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='59a09ca6-33d5-4c55-b464-b7dd366fb21c'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height:'100%'}}
      />
    </div>
  );
};

export default ChatsPage;