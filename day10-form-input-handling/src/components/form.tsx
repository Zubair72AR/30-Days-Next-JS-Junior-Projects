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
  let [submission, setSubmission] = useState<Submission | null>(null);

  let handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newSubmission: Submission = {
      name,
      email,
      message,
    };

    setSubmission(newSubmission);
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
        <h2>Contact Us</h2>
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
          {!isNameLength && (
            <p className="minimum">Minimum length required is 4</p>
          )}
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
          {!isEmailLength && (
            <p className="minimum">Minimum length required is 5</p>
          )}
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
          {!isMessageLength && (
            <p className="minimum">Minimum length required is 10</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submission && (
        <div className="output">
          <h2>Submitted Data</h2>
          <pre>{JSON.stringify(submission, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
