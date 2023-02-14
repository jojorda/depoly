import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { GoCalendar } from "react-icons/go";
import Row from "react-bootstrap/Row";
import "../styles/style.css";
import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useQuery } from "react-query";
import { API } from "../config/api";

// style={{ widht: "30rem", paddingTop: "100px", zIndex: "10" }}

export default function Filter() {

  // let { data: houses } = useQuery("housesCache", async () => {
  //   const response = await API.get("/houses");
  //   return response.data.data;
  // });

  // const [filters, setFilters] = useState({
  //   name: "",
  //   city_name: "",
  //   address: "",
  //   price: 0,
  //   type_rent: "",
  //   amenities: [],
  //   bedroom: 0,
  //   bathroom: 0,
  //   image: "",
  // });

  // const handleChange = (event) => {
  //   setFilters({
  //     ...filters,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleCheckbox = (event) => {
  //   const newAmenities = [...filters.amenities];
  //   if (event.target.checked) {
  //     newAmenities.push(event.target.value);
  //   } else {
  //     const index = newAmenities.indexOf(event.target.value);
  //     newAmenities.splice(index, 1);
  //   }
  //   setFilters({
  //     ...filters,
  //     amenities: newAmenities,
  //   });
  // };

  // const filteredData = houses.filter((data) => {
  //   if (filters.name && !data.name.toLowerCase().includes(filters.name.toLowerCase())) {
  //     return false;
  //   }
  //   if (filters.city_name && data.city_name.toLowerCase() !== filters.city_name.toLowerCase()) {
  //     return false;
  //   }
  //   if (filters.address && !data.address.toLowerCase().includes(filters.address.toLowerCase())) {
	// 	return false;
  //   }
  //   if (filters.price && data.price > filters.price) {
  //     return false;
  //   }
  //   if (filters.type_rent && data.type_rent.toLowerCase() !== filters.type_rent.toLowerCase()) {
  //     return false;
  //   }
  //   if (filters.amenities.length > 0) {
  //     let flag = false;
  //     filters.amenities.forEach((amenity) => {
  //       if (data.amenities.includes(amenity)) {
  //         flag = true;
  //       }
  //     });
  //     if (!flag) {
  //       return false;
  //     }
  //   }
  //   if (filters.bedroom && data.bedroom < filters.bedroom) {
  //     return false;
  //   }
  //   if (filters.bathroom && data.bathroom < filters.bathroom) {
  //     return false;
  //   }
  //   return true;
  // });


  return (
    <Col className="fixed-top bg-white ps-4" sm={3} style={{ height: "100vh", zIndex: "10", overflow: "auto", padding: "0", paddingTop: "90px" }}>
      <Form className=" d-flex flex-column gap-3 me-4 px-3" action="">
        <div className="d-flex flex-column gap-3">
          <Form.Label className="fw-bold m-0 fs24">Type Of Rent</Form.Label>
          <ToggleButtonGroup type="radio" name="typeOfRent" className="d-flex gap-3">
            <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="typeOfRent-1" value={1}>
              Day
            </ToggleButton>
            <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="typeOfRent-2" value={2}>
              Month
            </ToggleButton>
            <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="typeOfRent-3" value={3}>
              Year
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="d-flex flex-column gap-3">
          <Form.Label className="fw-bold m-0 fs24">Date</Form.Label>
          <InputGroup className="">
            <InputGroup.Text id="basic-addon1">
              <GoCalendar />
            </InputGroup.Text>
            <Form.Control className="bg" placeholder="Date" type="date" aria-label="Username" aria-describedby="basic-addon1" />
          </InputGroup>
        </div>
        <div className="d-flex flex-column gap-2">
          <Form.Label className="fw-bold m-0 fs24">Property Room</Form.Label>
          <div>
            <Form.Label className="text-secondary m-0 fs14 pb-2">badroom</Form.Label>
            <ToggleButtonGroup type="radio" name="badroom" className="d-flex gap-3">
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="badroom-1" value={1}>
                1
              </ToggleButton>
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="badroom-2" value={2}>
                2
              </ToggleButton>
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="badroom-3" value={3}>
                3
              </ToggleButton>
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="badroom-4" value={4}>
                4
              </ToggleButton>
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="badroom-5" value={5}>
                5+
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div>
            <Form.Label className="text-secondary m-0 fs14 pb-2">bathroom</Form.Label>
            <ToggleButtonGroup type="radio" name="bathroom" className="d-flex gap-3">
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-1" value={1}>
                1
              </ToggleButton>
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-2" value={2}>
                2
              </ToggleButton>
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-3" value={3}>
                3
              </ToggleButton>
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-4" value={4}>
                4
              </ToggleButton>
              <ToggleButton variant="outline-primary" className="fw-semibold text-dark bd rounded-2 bg w-100" id="bathroom-5" value={5}>
                5+
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          <Form.Label className="fw-bold m-0 fs24"> Amenities</Form.Label>
          <div className="d-flex justify-content-between">
            <label className="text-secondary" htmlFor="">
              Furnished
            </label>
            <Form.Check aria-label="option 1" />
          </div>
          <div className="d-flex justify-content-between">
            <label className="text-secondary" htmlFor="">
              Pet Allowed
            </label>
            <Form.Check aria-label="option 1" />
          </div>
          <div className="d-flex justify-content-between">
            <label className="text-secondary" htmlFor="">
              Shared Accomodation
            </label>
            <Form.Check aria-label="option 1" />
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <Form.Label className="fw-bold m-0 fs24"> Budget</Form.Label>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="5">
              Less than IDR.
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="" className="bg" />
            </Col>
          </Form.Group>
        </div>
        <div className="d-flex justify-content-md-end">
          <Button variant="secondary" className="">
            APPLY
          </Button>
        </div>
      </Form>
    </Col>
  );
}
