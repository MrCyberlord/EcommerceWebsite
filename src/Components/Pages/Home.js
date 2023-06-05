import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          textAlign: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        TOURS
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Place</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>JUL16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>JUL19</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>AUG 7</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button variant="info">Buy Tickets</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
