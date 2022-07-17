import React, { useState } from "react";
import "../App.css";

const AccoridianPage = (props: any) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <div className="accordian">
        <div className="open" onClick={() => setShow(!show)}>
          {show ? "Click to close" : "Click to open"}
        </div>

        <div className="">{show ? <p>{props.text}</p> : ""}</div>
      </div>
    </div>
  );
};

export default AccoridianPage;
