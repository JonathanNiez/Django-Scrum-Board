import Link from "next/link";
import AddBoard from "./addBoard";
import useBoardStore from "@/store/boardStore";
import React, { useState, useEffect } from "react";

export default function Board() {
  const { board, getBoardList } = useBoardStore();

  useEffect(() => {
    console.log("Mounted");
    getBoardList();
  }, []);

  return (
    <div className="bg-white p-10">
      <h1 className="text-black text-left text-3xl font-bold mb-5">Boards</h1>

      <div className="grid gap-5 grid-cols-3 text-black">
        {board.map((p) => (
          <div className=" border-gray-300 border-2 rounded-lg p-5">
            <a key={p.id} className="">
              <h3>{p.title}</h3>
              <small>{p.description}</small>
            </a>
          </div>
        ))}
        <Link href="/components/addBoard">
          <div className=" border-gray-300 border-2 rounded-lg p-5">
            <p className="text-3xl text-gray-400 text-center">+</p>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}
