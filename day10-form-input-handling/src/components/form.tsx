"use client";
import { useState } from "react";

interface Submission {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  let [name, setName] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [message, setMessage] = useState<string>("");
  let [isNameLength, setIsNameLength] = useState<boolean>(true);
  let [isEmailLength, setIsEmailLength] = useState<boolean>(true);
  let [isMessageLength, setIsMessageLength] = useState<boolean>(true);

  let handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let submission: Submission = {
      name,
      email,
      message,
    };

    console.log(submission);
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setName(value);

    if (value.length < 4) {
      setIsNameLength(false);
    } else {
      setIsNameLength(true);
    }
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
    if (value.length < 5) {
      setIsEmailLength(false);
    } else {
      setIsEmailLength(true);
    }
  };

  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setMessage(value);
    if (value.length < 10) {
      setIsMessageLength(false);
    } else {
      setIsMessageLength(true);
    }
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
            name="name"
            placeholder="Enter here"
            required
            onChange={handleName}
          />
          {!isNameLength && <p>Minimum length required is 4</p>}
        </div>
        <div>
          <label>
            Email <span>*</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter here"
            required
            onChange={handleEmail}
          />
          {!isEmailLength && <p>Minimum length required is 4</p>}
        </div>
        <div>
          <label>
            Message <span>*</span>
          </label>
          <textarea
            placeholder="Enter here"
            required
            rows={4}
            onChange={handleMessage}
          />
          {!isMessageLength && <p>Minimum length required is 4</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="output"></div>
    </div>
  );
}
