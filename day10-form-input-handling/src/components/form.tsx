export default function Form() {
  return (
    <div>
      <form>
        <div>
          <label>
            Name <span>*</span>
          </label>
          <input type="text" placeholder="Enter here" />
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
        <button>Submit</button>
      </form>
    </div>
  );
}
