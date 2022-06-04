import { useRef } from "react";
import type { NextPage } from "next";

import Input, { InputHandles } from "../components/input";

const Home: NextPage = () => {
  const InputRef = useRef<InputHandles>(null);

  return (
    <div>
      <Input
        leftIcon={"Q"}
        placeholder="Lorem Ipsum"
        label="Lorem Ipsum"
        ref={InputRef}
      />
      <br />
      <h1>Lorem Ipsum</h1>
      <h2>Lorem Ipsum</h2>
      <h3>Lorem Ipsum</h3>
      <h4>Lorem Ipsum</h4>
      <h5>Lorem Ipsum</h5>
      <h6>Lorem Ipsum</h6>
      <p>Lorem Ipsum</p>
      <small>Lorem Ipsum</small>
    </div>
  );
};

export default Home;
