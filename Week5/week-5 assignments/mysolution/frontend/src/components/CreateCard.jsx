import { useState } from "react";

export function CreateCard(props) {
    // react-query
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [interest, setInterest] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");
    const [others, setOthers] = useState("");

    return <div>
        <input id="name" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="name" onChange={function (e) {
            const value = e.target.value;
            setName(e.target.value);
        }}></input> <br />

        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function (e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <input id="interest" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="interest" onChange={function (e) {
            const value = e.target.value;
            setInterest(e.target.value);
        }}></input> <br />


        <input id="linkedin" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="linkedin" onChange={function (e) {
            const value = e.target.value;
            setLinkedin(e.target.value);
        }}></input> <br />

        <input id="twitter" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="twitter" onChange={function (e) {
            const value = e.target.value;
            setTwitter(e.target.value);
        }}></input> <br />

        <input id="others" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="others" onChange={function (e) {
            const value = e.target.value;
            setOthers(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            // axios
            fetch("http://localhost:3000/cards", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    description: description,
                    interest: interest,
                    linkedin: linkedin,
                    twitter: twitter,
                    others: others,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(async function (res) {
                    const json = await res.json();
                    alert("Card added");
                })
        }}>Add a card</button>
    </div>
}

