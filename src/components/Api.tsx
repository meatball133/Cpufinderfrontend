import { Cpu_state } from '../App';
import React, { Component,useEffect } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
export const Api = (text:any, setText:any) => {
    console.log("hi")
    const getMovies = async () => {
       try {
        const response = await fetch('http://127.0.0.1:8000/cpu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify("12900k"),
        });
        const json = await response.json();
        console.log(json);
        setText(json)
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      getMovies();
    }, [])}
  