import React from "react";
import "../components/Regform.css";
import { useState } from 'react';


export const Regform = () => {

    // const [reg, setreg] = useState('');
    // const handleChange = (event) =>{
    //     setreg(event.target.value);
    // };


  return (
    <>
      <div className="fir">
        <table className="box">
          <thead className="heading">
            <h1>Book-Appointment</h1>
          </thead>
          <tbody>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Registration Number</th>
                  <th scope="col">Time Slot</th>
                  <th scope="col">Status</th>
                  <th scope="col">Book</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>XXX</td>
                  <td>YYY</td>
                  <td><input type = "text" id = "reg" name = "reg" /></td>
                  <td>
                    <select
                      className="form-select"
                      id="opt"
                    // onChange={this.handleChange}
                    >
                      <option selected="">Time-Slot</option>
                      <option value={1}>10:00 - 10:30 am</option>
                      <option value={2}>10:30 - 11:00 am</option>
                      <option value={3}>11:00 - 11:30 am</option>
                      <option value={4}>11:30 - 12:00 am</option>
                      <option value={5}>12:30 - 13:00 am</option>
                      <option value={6}>13:00 - 13:30 am</option>
                      <option value={7}>13:30 - 14:00 am</option>
                      <option value={8}>14:00 - 14:30 am</option>
                      <option value={9}>14:30 - 15:00 am</option>
                      <option value={10}>15:00 - 15:30 am</option>
                      <option value={11}>15:30 - 16:00 am</option>
                      <option value={12}>16:00 - 16:30 am</option>
                      <option value={13}>16:30 - 17:00 am</option>
                    </select>
                  </td>
                  <td>-</td>
                  <td><button type="button" class="btn btn-primary btn-sm">Book</button></td>
                </tr>
              </tbody>
            </table>
          </tbody>
        </table>
        {/* <h2>Reg Number : {opt}</h2> */}
      </div>
    </>
  );
};

export default Regform;
