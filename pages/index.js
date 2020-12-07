import React, { useState, useEffect } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import _ from "underscore";
import styled from 'styled-components';

const Number = styled.div`
  background: gold;
  color: red;
`

export default function Home() {
  let num = [];
  const [list, setList] = useState(generate());
  function generate() {
    for (var i = 1; i <= 45; i++) {
      num.push(i);
    }
    num = _.shuffle(num);
    num.length = 6;
    console.log(num);
    return num;
  }

  useEffect(()=> {
    // mount, update
    generate();
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <h1>Home</h1>
      <Number>
        <h2>Style Component</h2>
      </Number>

      <section className="hero">
        {num.map((n, i) => {
          return <span className='ball' key={i}> {n} </span>;
        })}
        <div className="mt-5">
          <button
            onClick={()=> setList(generate())}
            className="btn btn-primary"
          >
            번호 생성
          </button>
        </div>
      </section>

      <style jsx>
        {`
          .hero {
            background: #ccc;
            padding: 20px;
          }
          .ball {
            display: inline-block;
            width: 50px;
            height 50px;
            border: 2px solid #666;
            border-radius: 50%;
            margin: 5px;
            text-align: center;
            line-height: 50px;
          }
        `}
      </style>
    </>
  );
}
