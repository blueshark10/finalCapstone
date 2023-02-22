import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from 'react-bootstrap/Table';
import image from './logo.svg'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
function user(
  name,
  surname,
  date_of_birth,
  address,
  country,
  email,
  telephone,
  company,
  profile_picture,
  shopping_cart
) {
  this.name = name;
  this.surname = surname;
  this.date_of_birth = date_of_birth;
  this.address = address;
  this.country = country;
  this.email = email;
  this.telephone = telephone;
  this.company = company;
  this.profile_picture = profile_picture;
  this.shopping_cart = shopping_cart;
}
const user1 = new user('Amir', 'Iqbal', '9 Dec 1998', 'Faisalabad', 'Pakistan', 'amir@gmail.com', '0312345453', 'Technit', image, ['Cups', 'Mugs', 'Jugs'])
const UserData = (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Profile Pic</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>DOB</th>
        <th>Address</th>
        <th>Country</th>
        <th>Email</th>
        <th>Telephone</th>
        <th>Company</th>
        <th>Shopping Cart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src={user1.profile_picture}></img></td>
        <td>{user1.name}</td>
        <td>{user1.surname}</td>
        <td>{user1.date_of_birth}</td>
        <td>{user1.address}</td>
        <td>{user1.country}</td>
        <td>{user1.email}</td>
        <td>{user1.telephone}</td>
        <td>{user1.company}</td>
        <td><ul>{(user1.shopping_cart).map((x) => {
          return (
            <li>{x}</li>
          )
        })}</ul></td>
      </tr>
    </tbody>
  </Table>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {UserData}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
