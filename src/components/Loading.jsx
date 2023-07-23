import React from "react";
import Spinner from '../assets/gif/spinner.svg';

const Loading = () => {

  return (
    <div className={"loading"}>
       <img src={Spinner} />
    </div>
  );
};

export default Loading;
