"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Project = ({ item }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div className="box">
        <p>{item?.description}</p>
        <button onClick={onOpenModal}>See More</button>
        <Modal center={true} open={open} onClose={onCloseModal}>
          <h2 style={{fontSize: '18px'}}>{item?.name}</h2>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            {item?.description}
          </p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              padding: "15px 0",
              fontSize: "14px",
            }}
          >
            <Link
              style={{
                padding: "0.8rem",
                backgroundColor: "black",
                borderRadius: "2px",
                color: "white",
              }}
              href={item?.live_link}
            >
              Live Link
            </Link>
            <Link
              style={{
                padding: "0.8rem",
                backgroundColor: "black",
                borderRadius: "2px",
                color: "white",
              }}
              href={item?.code_link}
            >
              Code Link
            </Link>
          </div>
          <h3 style={{fontSize: '16px', marginBottom: "10px"}}>Features</h3>
          <ul style={{ fontSize: "14px", paddingLeft: "30px" }}>
            {item?.features?.split("_b").map((item) => (
              <li style={{listStyleType: 'disc'}} key={item}>{item}</li>
            ))}
          </ul>
        </Modal>
      </div>
      <Image width={400} height={400} src={item?.picture} alt="project" />
    </>
  );
};

export default Project;
