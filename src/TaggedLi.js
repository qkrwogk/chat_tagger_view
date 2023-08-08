import React, { useEffect, useState } from "react";
import axios from "axios";
import * as bootstrap from "bootstrap";

const TaggedLi = (props) => {
    const [text, setText] = useState("");
    const [ners, setNers] = useState([]);
    const tag_color = {
        DT: "btn-warning", // DATE
        LC: "btn-info", // LOCATION
        OG: "btn-secondary", // ORGANIZATION
        PS: "btn-success", // PERSON
        QT: "btn-dark", // QUANTITY
        TI: "btn-primary", // TIME
        CR: "btn-danger", // CRIME
    }
    const popup_title = {
        DT: "날짜(Date)", // DATE
        LC: "장소(Location)", // LOCATION
        OG: "조직(Organization)", // ORGANIZATION
        PS: "인물(Person)", // PERSON
        QT: "수량(Quantity)", // QUANTITY
        TI: "시간(Time)", // TIME
        CR: "범죄(Crime)", // CRIME
    }

    useEffect(() => {
      const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
      const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    }, [ners])

    useEffect(() => {
        setText([...props.chat.message]);   // String을 [...string]으로 배열로 만들면 길이2인 이모티콘까지 1개 인덱스로 고려할 수 있다! (엄청난 사실)
                                            // https://stackoverflow.com/questions/24531751/how-can-i-split-a-string-containing-emoji-into-an-array
    }, [props.text]);
    useEffect(() => {
        if (text === "" || ners.length !== 0) {
            return;
        }
        if (props.chat.ner_tags.length === 0 && props.chat.kw_tags.length === 0) {
            return;
        }

        console.log(props.chat);
            
        const concat = props.chat.ner_tags.concat(props.chat.kw_tags);
        concat.sort((a, b) => {return a.start - b.start});
        console.log(concat);

        setNers(concat);
        
    }, [text]);
    return (
        <li className={
            ners.length !== 0
            ? props.className+" "+"bg-light"//"list-group-item-warning"
            : props.className
        }>{
            ners.length !== 0
            ? ners.map((ner, idx) => {
                const color = "btn py-0 px-1 mx-1 "+tag_color[ner.entity_group]
                if (idx === 0) { // 처음
                    if (ners.length === 1){
                        return (
                            <> 
                            {text.slice(0, ner.start)} 
                            <span className={color} data-bs-toggle="popover" data-bs-title={popup_title[ner.entity_group]} data-bs-content={ner.word}>
                                {text.slice(ner.start, ner.end)} 
                            </span> 
                            {text.slice(ner.end)}
                            </>

                        )
                    }
                    return (
                        <> 
                        {text.slice(0, ner.start)} 
                        <span className={color} data-bs-toggle="popover" data-bs-title={popup_title[ner.entity_group]} data-bs-content={ner.word}>
                            {text.slice(ner.start, ner.end)} 
                        </span> 
                        </>
                    )
                } 
                else if (idx !== ners.length-1) { // 중간
                    return (
                        <> 
                        {text.slice(ners[idx-1].end, ner.start)} 
                        <span className={color} data-bs-toggle="popover" data-bs-title={popup_title[ner.entity_group]} data-bs-content={ner.word}>
                            {text.slice(ner.start, ner.end)} 
                        </span> 
                        </>
                    )
                } else { // 끝
                    return (
                        <> 
                        {text.slice(ners[idx-1].end, ner.start)} 
                        <span className={color} data-bs-toggle="popover" data-bs-title={popup_title[ner.entity_group]} data-bs-content={ner.word}>
                            {text.slice(ner.start, ner.end)} 
                        </span> 
                        {text.slice(ner.end)}
                        </>
                    )
                }
            })
            : text
        }</li>
    );
};

export default TaggedLi;