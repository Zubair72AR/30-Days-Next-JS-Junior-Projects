"use client";
import { useState } from "react";

export default function Form() {
  let [name, setName] = useState("");
  let [email, SetEmail] = useState("");
  let [message, SetMessage] = useState("");
  let handleForm = (e: any) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form>
        <div>
          <label onSubmit={handleForm}>
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
          <input type="text" placeholder="Enter here" />
        </div>
        <div>
          <label>
            Message <span>*</span>
          </label>
          <textarea placeholder="Enter here" rows={4} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
