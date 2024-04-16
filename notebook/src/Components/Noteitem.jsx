import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="">
        <div className="card " style={{ width: "15rem" }}>
          {/* <img 
            src="https://picsum.photos/2000/3000"
            className="card-img-top "
            alt="..."
          /> */}
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <button>
              <span>✂️-Edit</span>
            </button>   
            <button>
              <span>❌-Delete</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
