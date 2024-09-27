"use client";
import { useState } from "react";

interface Submission {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  let [name, setName] = useState("");
  let [email, SetEmail] = useState("");
  let [message, SetMessage] = useState("");
  let handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let submission: Submission = {
      name,
      email,
      message,
    };
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label>
            Name <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter here"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>
            Email <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter here"
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>
        <div>
          <label>
            Message <span>*</span>
          </label>
          <textarea
            placeholder="Enter here"
            rows={4}
            onChange={(e) => SetMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="output">console.log(submission)</div>
    </div>
  );
}
