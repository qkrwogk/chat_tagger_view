import { useEffect, useState } from "react";
import TaggedLi from "./TaggedLi";

const ChatLoader = (props) => {
    const [dump, setDump] = useState({});

    const handleButtonClick = (e) => {
        console.log(dump)
    };

    useEffect(() => {
        if (props.ext === "json") {
            //setDump();
            console.log(props.dump);
        }
    }, [props.ext, props.dump])
    return (
        <>
        
            
        {dump.name && 
            <div class="font-weight-bold text-center mb-3">
                {dump.name} : {dump.type}
            </div>
        }
        {dump.messages && dump.messages.map((chat, index) => {
            const type_ = chat.type;
            if (type_ !== "message") {
                return (<></>)
            }
            const date_ = chat.date;
            const from_ = chat.from;
            const text_ = chat.text;
            if (text_ === "") {
                return (<></>)
            } else if (typeof text_ === "string") {
                return (
                    <ul key={index} className="list-group py-1 list-group-horizontal">
                        <li className="list-group-item py-1">{date_}</li>
                        <li className="list-group-item py-1">{from_}</li>
                        <li className="list-group-item py-1 list-group-item-info" text={text_} />
                    </ul>
                ) // li 대신 TaggedLi
                // <TaggedLi text={text_}></TaggedLi>
            } else {
                // 리스트도 필요하게 되면 추후 처리
                // else if (typeof Array.isArray(text_)) {...}
                return (<></>)
            }})}
        </>
    )
};

export default ChatLoader;