import { useState } from "react";
import "./Help.css";
import helpimage from "./helpimage.jpg";

function Help() {
  // State to manage form fields
  const [formData, setFormData] = useState({
    branch: "",
    email: "",
    name: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted successfully!");
    setFormData({ branch: "", email: "", name: "", address: "" }); // Reset form fields
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({ branch: "", email: "", name: "", address: "" });
  };

  return (
    <div>
      <br></br><br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img src={helpimage} alt="helpimage" className="helpimage" />
      <center>
        <form onSubmit={handleSubmit}>
          <div className="helptable">
            <table>
              <tr>
                <th><label htmlFor="help"></label></th>
                <td>
                  <select name="branch" id="help" value={formData.branch} onChange={handleChange}>
                    <option value="">How can we help you?</option>
                    <option value="Suggestions">Suggestions</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Issues">Review</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th><label htmlFor="email"></label></th>
                <td>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" *Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th><label htmlFor="name"></label></th>
                <td>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder=" *Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th><label htmlFor="text"></label></th>
                <td>
                  <textarea
                    id="address"
                    name="address"
                    rows="4"
                    cols="30"
                    required
                    placeholder="*Type Text..."
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div className="helpbtn">
            <button type="submit">Submit Feedback</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </center>
    </div>
  );
}

export default Help;
