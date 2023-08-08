import { useEffect, useState } from "react";
import TaggedLi from "./TaggedLi";

const ChatLoader = (props) => {
    const [dump, setDump] = useState({});

    const handleButtonClick = (e) => {
        console.log(dump)
    };

    useEffect(() => {
        if (props.ext === "json" && props.dump !== "") {
            //setDump();
            //console.log(props.dump);
            try {
                const dump = JSON.parse(props.dump.toString());
                setDump(dump);
            } catch {
                throw new Error("JSON parse error");
            }
        }
    }, [props.ext, props.dump])
    return (
        <>
        
            
        {dump.title && 
            <div class="font-weight-bold text-center mb-3">
                {dump.title} : {dump.saved_time}
            </div>
        }
        {dump.messages && dump.messages.map((chat, index) => {
            const time = chat.time;
            const name = chat.name;
            const message = chat.message;
            if (message === "") {
                return (<></>)
            } else if (typeof message === "string") {
                return (
                    <ul className="list-group py-1 list-group-horizontal">
                        <li className="list-group-item py-1">{time}</li>
                        <li className="list-group-item py-1">{name}</li>
                        <TaggedLi className="list-group-item" chat={chat}></TaggedLi>
                    </ul>
                ) // li 대신 TaggedLi
                // <TaggedLi text={text_}></TaggedLi>
                // <li className="list-group-item py-1">{message}</li>
            } else {
                // 리스트도 필요하게 되면 추후 처리
                // else if (typeof Array.isArray(text_)) {...}
                return (<></>)
            }})}
        </>
    )
};

export default ChatLoader;